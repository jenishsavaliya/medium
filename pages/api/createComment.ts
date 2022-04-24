// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SanityClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-04-24',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = SanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comment } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'comment',
      Post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (error) {
    return res.status(500)
  }
  console.log('comment submited')
  return res.status(200)
}

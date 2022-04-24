import imageUrlBuilder from '@sanity/image-url'
import { createCurrentUserHook, createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-04-24',

  // Set useCdn `false` if your application require the freshest posssible
  // data always (potentially slightly slower and a bit more expensive).
  // Authnticated request (like preview) will always bypass the CDN
  useCdn: process.env.NODE_ENV === 'production',
}
// Set up the client for fatching data in the getProps page functions
export const SanityClient = createClient(config)

// Set up a helper function for generating Image URLs with only the assets
// refrence data in your document
// Read more: https://www.sanity.io.docs/image-url

export const urlFor = (source) => imageUrlBuilder(config).image(source)

// Helper  function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)

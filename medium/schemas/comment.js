export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'approved',
      title: 'Approved',
      description: "Comment won't show on the site without approval ! ",
      type: 'boolean',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: { type: 'post' },
    },
  ],
}

import React from 'react'

const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.author}<button>view</button>
  </div>
)

export default Blog

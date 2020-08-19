import React from 'react'

const Blog = ({ blog }) => (

  <div>
    {blog.title} {blog.author}<button>view</button>
    <div>
      {blog.url} <br />
      {blog.likes} <br />
      {blog.author}
    </div>
    
  </div>
)

export default Blog

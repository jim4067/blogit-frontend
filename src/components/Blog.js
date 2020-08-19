import React from 'react'

const mainStyles = {
  "border": "solid",
  "margin" : "3px",
  "padding" : "4px"
}

const HideStyles = {

}

const Blog = ({ blog }) => (

  <div style={mainStyles} >
    {blog.title} {blog.author}<button>view</button>
    <div >
      {blog.url} <br />
      likes: {blog.likes} <br />
      {blog.author}
    </div>

  </div>
)

export default Blog;

//the idea is to have the button hide the info in the second div when a button is pressed
//the state will alway be set to true ie show

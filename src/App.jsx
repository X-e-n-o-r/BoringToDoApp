import { useState } from 'react'
import './App.css'
import PostForm from './Components/PostForm'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'have sex', body: 'no'},
    {id: 2, title: 'have sex', body: 'no'},
    {id: 3, title: 'have sex', body: 'no'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id ))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Task list 1"/>
        : <h1>There is no tasks</h1> }
    </div>
  )
}

export default App

import useFetch from "../hooks/use-fetch";

const Api = () =>{
  const {data: todos, loading: loadingTodos, error: errorTodos} = useFetch('https://jsonplaceholder.typicode.com/todos')
  const {data: posts, loading: loadingPosts, error: errorPosts} = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <section className="apis">
      <div className="listed">{todos && todos.map((todo)=> <ul><li key={todo.id}>{todo.id}. {todo.title}</li></ul>  )}</div>
      <div className="listed">
        {posts && posts.map((post)=>  <ul><li key={post.id}>{post.id} - {post.title} mmmmmm</li></ul>)}
      </div>
    

    </section>
  )
}

export default Api;
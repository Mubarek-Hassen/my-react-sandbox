import useFetch from "../hooks/use-fetch";

const Api = () =>{
  const {data: todos, loading: loadingTodos, error: errorTodos} = useFetch('https://jsonplaceholder.typicode.com/todos')
  const {data: posts, loading: loadingPosts, error: errorPosts} = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <section className="apis">
      <div className="listed">
        {loadingTodos && <div>{loadingTodos}</div>}
        <ul>{todos && todos.map(todo=> <li key={todo.id}>{todo.id}. {todo.title}</li>)}</ul>
      {errorTodos && <div>{errorTodos}</div>}
      </div>

      <div className="listed">
        {loadingPosts && <div>{loadingPosts}</div>}
        {errorPosts && <p>Something is wrong!</p> }
        <ul>
          {posts && posts.map(post=> <li key={post.id}> {post.id} - {post.title}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default Api;
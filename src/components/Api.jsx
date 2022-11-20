import useFetch from "../hooks/use-fetch";

const Api = () =>{
  const {data: todos, loading: loadingTodos, error: errorTodos} = useFetch('https://jsonplaceholder.typicode.com/todos')
  const {data: posts, loading: loadingPosts, error: errorPosts} = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <section>
    {todos && todos.map((todo)=> <ul><li key={todo.id}>{todo.id}. {todo.title}</li></ul>  )}

    </section>
  )
}

export default Api;
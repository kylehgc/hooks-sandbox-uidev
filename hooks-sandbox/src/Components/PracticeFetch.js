import React from "react";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1,2,3,4,5,6,7,8]

function fetchPost (id) {

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

const PracticeFetch = () => {
  const [loading, setLoading] = React.useState(true)
  const [post, setPost] = React.useState({})
  const [currentID, setCurrentID] = React.useState(0)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    fetchPost(postIds[currentID]).then(res => {
      setPost(res)
      setLoading(false)
    }).catch(err => setError(err))
  },[currentID])

  if(loading) {
    return <p>LOADING</p>
  }
  if (error) {
    return <p>error</p>
  } else {
    return (
      <div>
        {post.title}
        <br/>
        {post.body}
        {console.log("hi")}
        {postIds[currentID] !== postIds.length
        ? <button onClick={() => setCurrentID((oldID) => oldID +1)  }>FETCH THE NEXT POST </button>
        : null}
      </div>
    )
  }
}

export default PracticeFetch
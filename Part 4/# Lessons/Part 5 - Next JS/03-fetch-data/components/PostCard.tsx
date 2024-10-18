// #
interface Post {
  id: number
  title: string
  body: string
}

// #
interface PostCardProps {
  post: Post
}

// #
export default function PostCard({ post }: PostCardProps) {
  return (
    <div className='card'>
      <h2 className='font-semibold'>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

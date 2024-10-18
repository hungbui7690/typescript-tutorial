/*
  Challenge - Final Solution
  - depends on each type, we will have a type alias


*/

// 2. create 2 type aliases
type BasicProfileCardProps = {
  type: 'basic'
  name: string
}
type AdvancedProfileCardProps = {
  type: 'advanced'
  name: string
  email: string
}

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps // 2. union

function Component(props: ProfileCardProps) {
  const { type, name } = props

  // 3a.
  if (type === 'basic')
    return (
      <article className='alert alert-success'>
        <h2>user : {name}</h2>
      </article>
    )

  // 3b.
  return (
    <article className='alert alert-danger'>
      <h2>user : {name}</h2>
      <h2>email : {props.email}</h2>
    </article>
  )
}
export default Component

/*
  Challenge - Profile Card
  - depends on the type
    > if type = basic > then provide "name"
    > if type = advanced > then provide "name" + "email"
      + if there are missing fields (name or email) > TS should complain
    > also, it will have different looks (color)

  - hint: in css file, there are 3 classes:
    > alert
    > alert-danger
    > alert-success
  - these classes will create different looks

/////////////////////////////

  Challenge - First Solution
  - we use literal type for this solution

  *** it's not working well 
    > since right now, if type = advanced, and we just provide "name" 
    > TS does not complain

*/

// (1) literal type
type ProfileCardProps = {
  type: 'basic' | 'advanced'
  name: string
  email?: string // optional
}

function Component(props: ProfileCardProps) {
  const { type, name, email } = props // (2) extract

  const alertType = type === 'basic' ? 'success' : 'danger' // (3) depends on the types, we will have different alert
  const className = `alert alert-${alertType}`

  return (
    <article className={className}>
      <h2>user : {name}</h2>
      {email && <h2>email : {email}</h2>}
    </article>
  )
}

export default Component

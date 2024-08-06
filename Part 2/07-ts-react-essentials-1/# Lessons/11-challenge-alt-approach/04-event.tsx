/*
  Challenge - Alt Approach
  - not work as expected

  > we have to provide empty email to bypass 
    + <Component name='peter' type='basic' email='' />

*/

type ProfileCardProps = {
  type: 'basic' | 'advanced'
  name: string
  email: string // *** remove optional
}

function Component(props: ProfileCardProps) {
  const { type, name, email } = props

  const alertType = type === 'basic' ? 'success' : 'danger'
  const className = `alert alert-${alertType}`
  return (
    <article className={className}>
      <h2>user : {name}</h2>
      {type === 'advanced' ? <h2>email : {email}</h2> : null}
    </article>
  )
}
export default Component

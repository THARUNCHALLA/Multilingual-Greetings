import './index.css'

const Languages = props => {
  const {user, SelectImage, isActive} = props
  const {buttonText, id} = user

  const onclick = () => {
    SelectImage(id)
  }

  const value = isActive ? 'ha' : null

  return (
    <li>
      <button type="button" className={`button ${value}`} onClick={onclick}>
        {buttonText}
      </button>
    </li>
  )
}

export default Languages

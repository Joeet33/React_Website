export const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <div>
      <label>{message}</label>
    </div>
  )
}

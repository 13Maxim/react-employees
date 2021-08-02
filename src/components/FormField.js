function FormField({label, placeholder, value, setValue, type}) {
  const changeHandler = event => {
    setValue(event.target.value)
  }

  return (
    <label className="form-field">
      {label}
      <input
        className="form-field__input"
        type={type || 'text'}
        value={value}
        placeholder={placeholder || ''}
        onChange={changeHandler}
      />
    </label>
  )
}

export default FormField
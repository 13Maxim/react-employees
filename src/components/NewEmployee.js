import {useState} from 'react'
import FormField from "./FormField";
import {useHistory} from "react-router-dom";

function NewEmployee(props) {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(1000)
  const history = useHistory()

  const submitHandler = event => {
    event.preventDefault()
    if (name && position && salary) {
      const employee = {
        name,
        position,
        salary,
        id: Date.now(),
        hireDate: new Date().toLocaleDateString()
      }
      props.onSubmit(employee)
      history.push('/')
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section className="new-employee section">
      <h2 className="section__title">New employee</h2>
      <form onSubmit={submitHandler} className="employee-form">
        <FormField
          label="Employee's name"
          value={name}
          setValue={setName}
          placeholder="Please, enter a name"
        />
        <FormField
          label="Employee's position"
          value={position}
          setValue={setPosition}
          placeholder="Please, enter position"
        />
        <FormField
          label="Employee's salary"
          value={salary}
          setValue={setSalary}
          type="number"
        />
        <button type="submit" className="btn employee-form__submit">
          Hire
        </button>
      </form>
    </section>
  )
}

export default NewEmployee
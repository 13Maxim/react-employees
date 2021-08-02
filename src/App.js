import React, {useState} from 'react'
import Context from "./context";
import Header from "./components/main/Header";
import EmployeesList from "./components/EmployeesList";
import Modal from "./components/utils/modal/Modal";

function App() {

  const [employees, setEmployees] = useState([
    {name: 'Max', position: 'Front-end engineer', salary: 1000, id: 1},
    {name: 'Katya', position: 'Project Manager', salary: 2000, id: 2},
    {name: 'Ivan', position: 'Team-Lead', salary: 5000, id: 3},
  ])

  const [showDeleteModal, setDeleteModal] = useState(false)
  const [firedId, setFiredId] = useState(null)

  const fireHandler = (id) => {
    setDeleteModal(true)
    setFiredId(id)
  }

  const confirmFire = () => {
    setEmployees(employees.filter(emp => emp.id !== firedId))
    setDeleteModal(false)
  }

  const rejectFire = () => {
    setDeleteModal(false)
  }

  return (
    <Context.Provider value={{fireHandler}}>
      <div className="App">
        <Header />
        <main className="main">
          <div className="container">
            <h2 className="main__title">Employees</h2>
            <EmployeesList employees={employees} />
          </div>
        </main>
        {showDeleteModal && <Modal
          text="Are you sure you want to fire this employee?"
          onReject={rejectFire}
          onConfirm={confirmFire}
        />}
      </div>
    </Context.Provider>
  )
}

export default App

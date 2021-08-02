import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Context from "./context";
import Header from "./components/main/Header";
import Employees from "./components/Employees";
import Modal from "./components/utils/modal/Modal";
import NewEmployee from "./components/NewEmployee";

function App() {

  const [employees, setEmployees] = useState([
    {name: 'Max', position: 'Front-end engineer', salary: 1000, id: 1},
    {name: 'Katya', position: 'Project Manager', salary: 2000, id: 2},
    {name: 'Ivan', position: 'Team-Lead', salary: 5000, id: 3},
  ])

  const [showDeleteModal, setDeleteModal] = useState(false)
  const [firedId, setFiredId] = useState(null)

  const hireEmployee = (employee) => {
    setEmployees(employees => {
      employees.push(employee)
      return employees
    })
  }

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
      <Router>
        <div className="App">
          <Header />
          <main className="main">
            <div className="container">
              <Switch>
                <Route path="/new">
                  <NewEmployee onSubmit={hireEmployee} />
                </Route>
                <Route path="/">
                  <Employees employees={employees} />
                </Route>
              </Switch>
            </div>
          </main>
          {showDeleteModal
            && <Modal
            text="Are you sure you want to fire this employee?"
            onReject={rejectFire}
            onConfirm={confirmFire}
          />}
        </div>
      </Router>
    </Context.Provider>
  )
}

export default App

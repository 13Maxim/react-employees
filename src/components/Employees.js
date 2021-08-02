import EmployeeCard from "./EmployeeCard";
import React from "react";

function Employees(props) {
  return (
    <section className="employees section">
      <h2 className="section__title">Employees</h2>
      {
        props.employees.length
          ? <ul className="employees__list">
              { props.employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />) }
            </ul>
          : <p className="employees__no-employees"><strong>No employees yet</strong></p>
      }
    </section>
  )
}

export default Employees

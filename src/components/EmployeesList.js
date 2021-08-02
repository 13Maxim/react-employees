import EmployeeCard from "./EmployeeCard";

function EmployeesList(props) {
  return (
    <div className="employees">
      {
        props.employees.length
          ? <ul className="employees__list">
              { props.employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />) }
            </ul>
          : <p className="employees__no-employees"><strong>No employees yet</strong></p>
      }
    </div>
  )
}

export default EmployeesList

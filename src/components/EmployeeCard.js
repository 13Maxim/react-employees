import Context from "../context";
import {useContext} from "react";

function EmployeeCard({employee}) {
  const {fireHandler} = useContext(Context)

  return (
    <div className="employee-card">
      <ul className="employee-data">
        <li className="employee-data__item">
          Name:  {employee.name}
        </li>
        <li className="employee-data__item">
          Position:  {employee.position}
        </li>
        <li className="employee-data__item">
          Salary:  {employee.salary}$
        </li>
      </ul>
      <div className="employee-card__btns">
        <button onClick={fireHandler.bind(null, employee.id)} className="btn">
          Fire
        </button>
      </div>
    </div>
  )
}

export default EmployeeCard
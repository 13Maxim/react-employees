function Btn(props) {
  return (
    <button className="btn" onClick={props.handler || null}>{props.children}</button>
  )
}

export default Btn
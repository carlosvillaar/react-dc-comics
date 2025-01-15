const Card = (props) => {
  return (
    <div className="col d-flex flex-wrap mx-0 my-0 px-2 py-2">
      <div className="custom-card">
        <img src={props.thumb} alt={props.title} />
        <h6 className="pt-2">{props.title}</h6>
      </div>
    </div>
  )
}

export default Card
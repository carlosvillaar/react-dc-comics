const Card = (props) => {
  return (
    <div className="col d-flex mx-2">
      <div className="custom-card">
        <img src={props.thumb} alt={props.title} />
        <h6 className="py-3">{props.title}</h6>
      </div>
    </div>
  )
}

export default Card
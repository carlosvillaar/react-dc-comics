const Header = () => {
  return (
    <header>
      <div className="container-md">
        <div className="row">
          <div className="col-3 py-4">
          <img className="w-25" src="/img/dc-logo.png" alt="logo" />
          </div>
          <div className="col-9 py-4 align-content-center">
          <ul className="list-unstyled d-flex gap-5">
              <li><a href="#">Characters</a></li>
              <li><a className="active" href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">games</a></li>
              <li><a href="#">collectibles</a></li>
              <li><a href="#">videos</a></li>
              <li><a href="#">fans</a></li>
              <li><a href="#">news</a></li>
              <li><a href="#">shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
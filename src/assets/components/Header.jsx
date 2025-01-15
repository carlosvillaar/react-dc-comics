const Header = (props) => {

  const { headerLinks } = props

  return (
    <header>
      <div className="container-md">
        <div className="row">
          <div className="col-3 py-4">
            <a href="#"><img className="w-25" src="/img/dc-logo.png" alt="logo" /></a>
          </div>
          <nav className="col-9 py-4 align-content-center">
            <ul className="list-unstyled d-flex gap-5">
              {headerLinks.map(item => (
                <li key={`hnav-${item.id}`}>
                  <a className={item.classname} href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

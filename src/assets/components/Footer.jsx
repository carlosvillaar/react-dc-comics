import { footerDC, footerDcComics, footerShop, footerSites } from "../../../data/comicsData"

const Footer = (props) => {

  const { footerMenus } = props

  return (
    <footer>
      <section className="footerTop">
        <div className="container-md">
          <div className="row">
            <div className="col-6 d-flex py-5 align-content-start">
              <div>
                <h4 className="py-2">dc comics</h4>
                <ul>
                  {footerDcComics.map(item => (
                    <li key={`fdc-${item.id}`}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
                <h4 className="py-2">shop</h4>
                <ul>
                  {footerShop.map(item => (
                    <li key={`fs-${item.id}`}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-5">
                <h4 className="py-2">DC</h4>
                <ul>
                  {footerDC.map(item => (
                    <li key={`fdc-${item.id}`}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="py-2">sites</h4>
                <ul>
                  {footerSites.map(item => (
                    <li key={`fsi-${item.id}`}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="background">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footerBottom align-content-center">
        <div className="container-md">
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-lg btn-outline-primary text-light">SIGN-UP NOW!</button>
            </div>
            <div className="col-6 py-1 d-flex align-content-center justify-content-end">
              <h4 className="follow px-4 py-1">follow us</h4>
              <ul className="social d-flex list-unstyled gap-4">
                <li><a href="#"><img src="/img/footer-facebook.png" alt="" /></a></li>
                <li><a href="#"><img src="/img/footer-twitter.png" alt="" /></a></li>
                <li><a href="#"><img src="/img/footer-youtube.png" alt="" /></a></li>
                <li><a href="#"><img src="/img/footer-pinterest.png" alt="" /></a></li>
                <li><a href="#"><img src="/img/footer-periscope.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer

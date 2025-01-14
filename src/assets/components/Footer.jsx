import { footerDcComics, footerShop } from "../../../data/comicsData"

const Footer = (props) => {

  const {footerMenus} = props

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
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Ad Choices</a></li>
                  <li><a href="#">Advertising</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Subscriptions</a></li>
                  <li><a href="#">Talent Workshops</a></li>
                  <li><a href="#">CPSC Certificates</a></li>
                  <li><a href="#">Ratings</a></li>
                  <li><a href="#">Shop Help</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="py-2">sites</h4>
                <ul>
                  <li><a href="#">DC</a></li>
                  <li><a href="#">MAD Magazine</a></li>
                  <li><a href="#">DC Kids</a></li>
                  <li><a href="#">DC Universe</a></li>
                  <li><a href="#">DC Power Visa</a></li>
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

/*<li><a href="#">Characters</a></li>
                  <li><a href="#">Comics</a></li>
                  <li><a href="#">Movies</a></li>
                  <li><a href="#">TV</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Videos</a></li>
                  <li><a href="#">News</a></li> */
const Main = () => {
  return (
    <main>
      <section className="gray align-content-center">
        <div className="container-md">
          <h2> -- Content goes here -- </h2>
        </div>
      </section>
      <section className="blue align-content-center">
        <div className="container-md d-flex justify-content-around">
          <div className="shop">
            <img src="/img/buy-comics-digital-comics.png" alt="img1" />
            <a href="#">digital comics</a>
          </div>
          <div className="shop">
            <img src="/img/buy-comics-merchandise.png" alt="img1" />
            <a href="#">merchandise</a>
          </div>
          <div className="shop">
            <img src="/img/buy-comics-subscriptions.png" alt="img1" />
            <a href="#">subscription</a>
          </div>
          <div className="shop">
            <img src="/img/buy-comics-shop-locator.png" alt="img1" />
            <a href="#">comic shop locator</a>
          </div>
          <div className="shop">
            <img src="/img/buy-dc-power-visa.svg" alt="img1" />
            <a href="#">dc power visa</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
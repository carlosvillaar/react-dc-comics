import Card from "./Card"

const Main = (props) => {
  
  const {comics} = props

  return (
    <main>
      <div className="jumbo align-content-center position-relative">
        <span className="position-absolute label d-flex align-items-center justify-content-center">current series</span>
      </div>
      <section className="gray">
        <div className="container-sm pt-5">
          <div className="row">
              {comics.map(comic => (
                 <Card key={`cmcs-${comic.id}`} thumb={comic.thumb} title={comic.title} />
              ))}
          </div>
        </div>
        <div className="text-center pb-4">
          <button className="csm-button"><a href="#">Load More</a></button>
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
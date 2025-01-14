import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import {headerLinks, footerDcComics, footerShop, footerDC, footerSites} from "../data/comicsData";

const App = () => {



  return (
    <>
      <Header headerLinks={headerLinks} />
      <Main />
      <Footer footerMenus={{footerDcComics, footerShop, footerDC, footerSites}} />
    </>
  )
}

export default App;
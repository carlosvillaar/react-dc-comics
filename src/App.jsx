import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import { headerLinks, footerDcComics, footerShop, footerDC, footerSites } from "../data/comicsData";
import comics from "../data/comics";

const App = () => {



  return (
    <>
      <Header headerLinks={headerLinks} />
      <Main comics={comics} />
      <Footer footerMenus={{ footerDcComics, footerShop, footerDC, footerSites }} />
    </>
  )
}

export default App;
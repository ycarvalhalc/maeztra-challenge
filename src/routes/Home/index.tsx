import FullBanner from "../../components/Home/FullBanner"
import Deals from "../../components/Home/Deals"
import Brands from "../../components/Home/Brands"
import Shelf from "../../components/Home/Shelf"
import Mosaic from "../../components/Home/Mosaic"

const Home = () => {
  return (
    <main>
      <FullBanner />
      <Deals />
      <Brands />
      <Shelf />
      <Mosaic />
    </main>
  )
}

export default Home
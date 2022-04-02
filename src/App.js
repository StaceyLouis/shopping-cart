import TopBanner from "./components/TopBanner";
import BigNav from "./components/BigNav";
import Blog from "./components/Blog";
import BottomBanner from "./components/BottomBanner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Popular from "./components/Popular";
import Shopping from "./components/Shopping";
import SmallNav from "./components/SmallNav";

import './index.css'


export default function App() {
  return (
    <div>
      <TopBanner/>
      <SmallNav/>
      <BigNav/>
      <Featured/>
      <Shopping/>
      <Popular/>
      <NewArrivals/>
      <BottomBanner/>
      <Blog/>
      <Footer/>

    </div>
  );
}

import "./App.css";
import Card from "./component/Card";
import kei from "./assets/kei.jpg"
// import johan from "./assets/2.png"
import rem from "./assets/rem.jpg";
import nejuko from "./assets/y.jpg";

function App() {
  return (
    <>
      <div className="cards">
      <Card name={'Remu Rin'}  images={rem}/>
      <Card name={'kei karuizawa'} images={kei} />
      <Card name={'Bipin lamsal'} images={nejuko}/>
    </div>

    </>
  );
}

export default App;

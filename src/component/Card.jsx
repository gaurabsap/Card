import React from "react";
// import Typed from "react-typed";
import "./style.scss";
const Card = ({ images, name }) => {
  return (
    <>

      <div className="card">
        <div className="images">
          <img src={images} alt="" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ad!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum at
            voluptatem voluptatibus explicabo eveniet
          </p>
          <button>Read more</button>
        </div>
      </div>
      {/* <Typed
        strings={["first", "second", "third"]}
        typeSpeed={100}
        backSpeed={50}
        loop
      /> */}
    </>
  );
};

export default Card;

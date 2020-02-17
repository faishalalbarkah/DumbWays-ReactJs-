import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, breeder, jarak, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate([x, y], (x, y) => `translate3d(${x}px,10px,0)`)
        }}
      >
        <animated.div
          {...bind(i)}
          style={
            {
              // transform: interpolate([rot, scale], trans)
            }
          }
        >
          <div className="card-swipe">
            <Carousel>
              {pics.map((pic, index) => (
                <img
                  // className="Carousel-Card-img"
                  src={pic}
                  key={index}
                  alt="profilePicture"
                />
              ))}
            </Carousel>
          </div>
          <div className="text-Card">
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                marginTop: "60px"
              }}
            >
              <h2>{name}</h2>
              <p>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: "10px" }}
                />
                {breeder}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  style={{ marginRight: "10px" }}
                />
                {jarak}
              </p>
            </div>
            {/* <img
              style={{ marginRight: "200px", marginBottom: "200px" }}
              src={require("./Image/gambar2.png")}
            /> */}
            {/* <img
              style={{
                position: "absolute",
                bottom: "0",
                marginTop: "20px",
                paddingBottom: "20px"
              }}
              src={require("./Image/map.png")}
            /> */}
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  breeder: PropTypes.string,
  jarak: PropTypes.string,
  pics: PropTypes.array
};

export default Card;

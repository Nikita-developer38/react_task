import "../style/Card.css";
import { FaRegHeart } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
function Card(props) {
  return (
    <>
      <div className="bodie">
        <div className="headers">
          <h3>{props.header}</h3>
          <div className="heart" style={{ alignSelf: "center" }}>
            <FaRegHeart />
          </div>
        </div>
        <div className="name">{props.name}</div>
        <img src={props.img} alt="car" style={{ margin: "15px" }} />
        <div className="info">
          <div className="information">
            <div>
              <BsFillFuelPumpFill />
            </div>
            <div>{props.petrol} L</div>
          </div>
          <div className="information">
            <div>
              <TbSteeringWheel />
            </div>
            <div>Manual</div>
          </div>
          <div className="information">
            <div>
              <FaUserFriends />
            </div>
            <div>{props.people} People</div>
          </div>
        </div>
        <div className="rent">
          <div className="prize">
            <h2>${props.prize}/</h2>
            <h6 style={{ alignSelf: "center", color: "#90A3BF" }}>day</h6>
          </div>
          <button className="button">Rent Now</button>
        </div>
      </div>
    </>
  );
}
export default Card;

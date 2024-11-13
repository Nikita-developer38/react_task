import "../style/Track.css";
import { MdExpandMore } from "react-icons/md";

function Track(props) {
  return (
    <>
      <div className="body">
        <div className="roww">
          <div className="b-circle">
            <div className="s-circle"></div>
          </div>
          <header style={{ fontWeight: "bold", fontSize: "16px" }}>
            {props.name}
          </header>
        </div>
        <div className="row">
          <div>
            <h3>Location</h3>
            <div className="city">
              <div style={{ color: "#90A3BF", fontSize: "12px" }}>
                Select your City
              </div>
              <div>
                <div>
                  <MdExpandMore />
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <h3>Date</h3>
            <div className="city">
              <div style={{ color: "#90A3BF", fontSize: "12px" }}>
                Select your Date
              </div>
              <div>
                <div>
                  <MdExpandMore />
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <h3>Time</h3>
            <div className="city">
              <div style={{ color: "#90A3BF", fontSize: "12px" }}>
                Select your Time
              </div>
              <div>
                <div>
                  <MdExpandMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Track;

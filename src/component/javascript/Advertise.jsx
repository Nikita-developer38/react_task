import ads1 from "../../images/Ads1.png";
import ads2 from "../../images/Ads2.png";
import "../style/Advertise.css";
function Advertise() {
  return (
    <>
      <div id="board">
        <div>
          <img src={ads1} alt="ads" />
        </div>
        <div>
          <img src={ads2} alt="ads" />
        </div>
      </div>
    </>
  );
}
export default Advertise;

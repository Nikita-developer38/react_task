import Card from "./Card";
import car1 from "../../images/car1.png";
import car2 from "../../images/car2.png";

import car3 from "../../images/Car3.png";

import car4 from "../../images/Car4.png";

function CardPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "30px",
          marginTop: "36px",
          marginBottom: "36px",
        }}
      >
        <div style={{ color: "#90A3BF" }}>Popular Car</div>
        <div style={{ color: "#1782e7" }}>View all</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        <Card
          header="Koenigsegg"
          img={car1}
          name="Sport"
          petrol="90"
          people="2"
          prize="99.00"
        />
        <Card
          header="Nissan GT - R"
          img={car2}
          name="Sport"
          petrol="80"
          people="2"
          prize="80.00"
        />
        <Card
          header="Rolls - Royce"
          img={car3}
          name="Sedan"
          petrol="70"
          people="4"
          prize="96.00"
        />
        <Card
          header="Nissan GT - R"
          img={car4}
          name="Sport"
          petrol="80"
          people="2"
          prize="80.00"
        />
      </div>
    </>
  );
}
export default CardPage;

import Card from "./Card";
import car5 from "../../images/Car5.png";
import car6 from "../../images/Car6.png";

import car7 from "../../images/Car7.png";

import car8 from "../../images/Car8.png";

import car9 from "../../images/Car9.png";

import car10 from "../../images/Car10.png";

import car11 from "../../images/Car11.png";

import car12 from "../../images/Car12.png";

function CardPage2() {
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
        <div style={{ color: "#90A3BF" }}>Recommendation Car</div>
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
          header="All New Rush"
          img={car5}
          name="SUV"
          petrol="70"
          people="6"
          prize="72.00"
        />
        <Card
          header="CR - V"
          img={car6}
          name="SUV"
          petrol="80"
          people="6"
          prize="80.00"
        />
        <Card
          header="All New Terios"
          img={car7}
          name="SUV"
          petrol="90"
          people="6"
          prize="74.00"
        />
        <Card
          header="CR - V"
          img={car8}
          name="SUV"
          petrol="80"
          people="6"
          prize="80.00"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginLeft: "24px",
          marginRight: "24px",
          marginTop: "24px",
        }}
      >
        <Card
          header="MG ZX Exclusice"
          img={car9}
          name="Hatchback"
          petrol="70"
          people="6"
          prize="76.00"
        />
        <Card
          header="New MGZS"
          img={car10}
          name="SUV"
          petrol="80"
          people="6"
          prize="80.00"
        />
        <Card
          header="MG ZX Excite"
          img={car11}
          name="Hatchback"
          petrol="90"
          people="4"
          prize="74.00"
        />
        <Card
          header="New MGZS"
          img={car12}
          name="SUV"
          petrol="80"
          people="6"
          prize="80.00"
        />
      </div>
      <div>
        <button
          style={{
            background: "#3563E9",
            color: "#ffffff",
            padding: "7px",
            border: "none",
            borderRadius: "5px",
            margin: "30px",
            alignItems: "center",
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          Show More Card
        </button>
      </div>
    </>
  );
}
export default CardPage2;

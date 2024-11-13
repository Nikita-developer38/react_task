import { LuArrowUpDown } from "react-icons/lu";
function Button() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#3563E9",
          padding: "10px",
          color: "white",
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <LuArrowUpDown />
      </div>
    </>
  );
}
export default Button;

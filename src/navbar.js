import { useNavigate } from "react-router-dom";
import { focus } from "./Utils";

const Navbar = (props) => {
  const navigate = useNavigate();
  const routes = [
    { name: "A Clínica", handle: () => {navigate("/")} },
    { name: "Agendamento", handle: () => {navigate("/agendamento")} },
    { name: "Exames", handle: () => {window.location.pathname == "/" ?focus("curso"): navigate("/",{state:{focus:"curso"}}) } },
    { name: "Contato", handle: () => {window.location.pathname == "/" ?focus("contato"): navigate("/",{state:{focus:"contato"}})} },
  ];
  const route = props.routes;
  return (
    <div
      style={{
        backgroundColor: "#C22323",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "0 0 1em black",
      }}
    >
      <img
        style={{ width: "6vh", height: "6vh" }}
        src="https://cdn-icons-png.flaticon.com/512/1546/1546140.png"
      ></img>
      {routes.map((route) => (
          <h1 onClick={route.handle}
            style={{
              color: "white",
              cursor: "pointer",
            }}
          >
            {route.name}
          </h1>
      ))}
    </div>
  );
};
export default Navbar;

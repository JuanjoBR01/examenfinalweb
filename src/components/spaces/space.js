import * as ReactDOMClient from "react-dom/client";
import Rooms from "../rooms/rooms";

const Space = (props) => {
  localStorage.setItem("roots", JSON.stringify(0));
  const showRooms = (idSpace) => {
    const containter = document.getElementById("filitaRoom");
    const root = ReactDOMClient.createRoot(containter);
    root.render(<Rooms key={idSpace} props={idSpace} />);
  };

  return (
    <div
      className="card tarjeta"
      onClick={() => {
        showRooms(props.space.id);
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/1930/1930196.png"
        className="card-img-top"
        alt={props.space.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.space.name}</h5>
        <p className="card-text">{props.space.address}</p>
      </div>
    </div>
  );
};

export default Space;

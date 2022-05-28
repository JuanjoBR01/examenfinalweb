import { useEffect, useState } from "react";
import Room from "./room";
const Rooms = (props) => {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((rooms) => {
        setRooms(rooms.filter((p) => p.homeId === props.props));
      });
  }, []);

  const showDevices = (room) => {
    let fila = document.getElementById("idRoom");
    for (let i = 0; i < room.devices.lenght; i++) {
      let aux = document.createElement("h5");
      aux.innerHTML = room.devices[i].name;
      console.log(room.devices[i]);
      fila.appendChild(aux);
    }
  };

  return (
    <div className="row" id="idRoom">
      {rooms.map((room) => (
        <Room key={room.name} room={room} onClick={showDevices(room)} />
      ))}
      ,
    </div>
  );
};

export default Rooms;

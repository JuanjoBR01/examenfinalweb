const Room = (props) => {


  return (
    <div className="card tarjeta" >
      <img
        src="https://cdn-icons-png.flaticon.com/128/578/578110.png"
        className="card-img-top"
        alt={props.room.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.room.name}</h5>
      </div>
    </div>
  );
};

export default Room;

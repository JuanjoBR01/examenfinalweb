import { useEffect, useState } from "react";
import Space from "./space"

const Spaces = () => {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

  const [spaces, setSpaces] = useState([]);



  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((spaces) => {
        setSpaces(spaces);
      });
  }, []);

  return (
    <div className="row" id="rowSpaces">
      {spaces.map((space) => (
        <Space key={space.id} space={space}/>
      ))},
      <div className="row" id="filitaRoom"></div>
    </div>
    
  );
};

export default Spaces;

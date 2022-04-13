import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import emailImg from "./assets/email.svg";
import locationImg from "./assets/location.svg";
import phoneImg from "./assets/phone.svg";

function App() {
  const baseUrl = `https://randomuser.me/api/`;

  
  const [cardData, setCardData] = useState([]);

  const randomUser = async () => {
    // await axios.get(baseUrl)
    // .then((res)=>  setCardData(res.data.results))
    const res = await axios.get(baseUrl)
     setCardData(res.data.results);

    // setCardData(res.data.results[0])
  };

  // randomUser();
  
  useEffect(() => {
    randomUser();
  }, []);

  return (
    <div className="App">
    
    {
      cardData.map(item=>{
        return(
      <div
        className="container"
        key={item.id.value}
        >
        <div className="card-main">
          <nav>
            <img className="picture" src={item.picture.large} alt="" />
            <h4>
              {item.name.title} {item.name.first}  {item.name.last}
            </h4>
          </nav>
          <nav>
            <img className="svg" src={emailImg} alt="" />
            <p>{item.email}</p>
          </nav>
          <nav>
            <img className="svg" src={phoneImg} alt="" />
            <p>{item.phone}</p>
          </nav>
          <nav>
            <img className="svg" src={locationImg} alt="" />
            <p>
              {item.location.city} - {item.location.country}
            </p>
          </nav>
        </div>
        <div className="card-footer">
          <p>Age: {item.dob.age}</p>
          <p>Register Date: {item.registered.date.slice(0, 10)} </p>
        </div>
      </div>
        )
      })
    }
      
      <button className="btn" onClick={randomUser}>
        Random User
      </button>
      
    </div>
  );
}

export default App;

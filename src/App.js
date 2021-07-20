import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  // const getAdvice = async () => {
  //   const { data } = await axios.get("https://api.adviceslip.com/advice");
  //   console.log("RESPONSE is: ", data);
  //   const adviceData = data.slip.advice;
  //   setAdvice(adviceData);
  // };
  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const adviceData = response.data.slip.advice;
        setAdvice(adviceData);
        console.log(adviceData);
      })
      .catch((error) => {
        console.log("error is ", error);
      });
    // console.log("RESPONSE is: ", data);
    // const adviceData = data.slip.advice;
    // setAdvice(adviceData);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>{advice}</h1>
        <button className="button" onClick={getAdvice}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;

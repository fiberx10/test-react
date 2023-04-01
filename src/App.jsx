import { useState, useEffect } from "react";
import "./App.css";
import api from "./utils/api";

function App() {
  const [catsVotes, setCatsVotes] = useState();
  const [dogsVotes, setDogsVotes] = useState();
  const [forceRefresh, setForceRefresh] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      const response = await api.get("/getAll");
      console.log(response.data);
      // TODO parse this
      setCatsVotes(response.data.cats);
      setDogsVotes(response.data.dogs);
    }
    fetchAll();
  }, [forceRefresh]);

  const voteCat = async () => {
    console.log("voteCat");
    const response = await api.post("/voteCat");
    // TODO parse this
    setCatsVotes(response.data.cats);
    setDogsVotes(response.data.dogs);
    setForceRefresh(!forceRefresh);
  };

  const voteDog = async () => {
    console.log("voteDog");
    const response = await api.post("/voteDog");
    // TODO parse this
    setCatsVotes(response.data.cats);
    setDogsVotes(response.data.dogs);
    setForceRefresh(!forceRefresh);
  };

  return (
    <div className="w-screen h-screen">
      <div>
        <h1 className="text-4xl text-center">Cats vs Dogs</h1>
        <p>
          Cats Votes : {catsVotes} <br />
          Dogs Votes : {dogsVotes}
        </p>
      </div>
      <div className="w-[200px] h-[200px]">
        <button onClick={() => voteCat()} className="">
          Cat !!
        </button>
        <button onClick={() => voteDog()} className="">
          Dog !!
        </button>
      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from './City'

function App() {
  const key = "86faff0478c079b71968ced721197a73";
  const [selectedCity, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getApi();
  }, [search]);

   

  return (
    <div className="api">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="text border-gray-300"
          type="px-3 border-3"
        />
        <City city={selectedCity}></City>
      
    </div>
  );
}

export default App;

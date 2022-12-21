import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

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
      <div class="overflow-hidden shadow sm:rounded-md">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >
                Şehir Ara:
              </label>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <City city={selectedCity}></City>
          </div>
        </div>
      </div>

       
    </div>
  );
}

export default App;

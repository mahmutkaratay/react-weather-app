import React from "react";

const City = ({ city }) => {
  console.log(city);
  if(city != null)
  {
    return (
        <div>
          <div>
            <h1>{city.main.temp} *C - feels like {city.main.feels_like} *C</h1>
            <h1>{city.name}- { city.sys.country }</h1>
            <h1>{city.weather[0].main}</h1>
          </div>
        </div>
      );
  }
  
};

export default City;

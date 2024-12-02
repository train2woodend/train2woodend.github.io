import React from "react";
import Navbar from "./Navbar";
import SelectDirection from "./SelectDirection";
import SelectTravelDay from "./SelectTravelDay";
import ShowServices from "./ShowServices";
import { directions as allDirections } from "./data/directions.js";
import { travelDays as allTravelDays } from "./data/travelDays.js";
import { services as allServices } from "./data/services.js";

function App() {
  const [ selectedDirection, setSelectedDirection ] = React.useState();
  const [ travelDays, setTravelDays ] = React.useState();
  const [ selectedTravelDay, setSelectedTravelDay ] = React.useState();
  const [ services, setServices ] = React.useState();

  // ...
  const selectDirection = (direction) => {
    //console.log("Direction ID: " + direction.id);
    setSelectedDirection(direction);
    setSelectedTravelDay();
    setServices();
    const data = allTravelDays.filter(obj => { return obj.directionId == direction.id });
    if (data) {
      setTravelDays(data);
    }

  }

  // ...
  const selectTravelDay = (travelDay) => {
    //console.log("Travel Day ID: " + travelDay.id);
    setSelectedTravelDay(travelDay);
    const data = allServices.filter(obj => { return obj.travelDayId == travelDay.id });
    if (data) {
      setServices(data);
    }
  }

  return (
    <>
      <Navbar />
      <div className="content p-2">

        {allDirections && (
          <>
            <div className="mb-1">
              <SelectDirection directions={allDirections} selectDirection={selectDirection} />
            </div>
          </>
        )}

        {travelDays && (
          <>
            <div className="mb-1">
              <SelectTravelDay travelDays={travelDays} selected={selectedTravelDay} selectTravelDay={selectTravelDay} />
            </div>
          </>
        )}

        {services && (
          <>
            <div className="mb-1">
              <ShowServices services={services} />
            </div>
          </>
        )}


      </div>
    </>
  )
}

export default App;

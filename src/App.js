import React, {useState} from 'react';
import {Switch,Route} from "react-router-dom";
import 'reset-css';
import "./styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";


//Store
import houseContext from "./store/houseStore";

// Views
import Home from "./views/Home";


// CSV Data
import {csv} from 'd3-fetch';
import file from "./data/pp-2020.csv";

function App() {
  const [limit, setLimit] = useState(10);
  const [houseInfo, setHouseInfo] = useState([]);

  const grabCsvData = async () => {
    const convertCsv = await csv(file);
       const formatData = async () => {
      return convertCsv.map(i => {
        const array = [];
          
        for (const [key, value] of Object.entries(i)) {
          array.push(value);
          
        }

        return {
          "id": array[2],
          "price": array[1],
          "date": array[3].split(" ")[0],
          "time": array[3].split(" ")[1],
          "postcode": array[4],
          "house_number": array[0],
          "flat_number": array[6],
          "street_name": array[9],
          "street_line_2": array[10],
          "county": array[11],
        };

      });
    };

    if(houseInfo.length <= 0 ){
      const formattedData = await formatData();
      setHouseInfo(formattedData);
    };
  };
  
  grabCsvData();

  const clearSearch = () => {
    setHouseInfo([]);
    grabCsvData();
  };


  return (
    <div className="App">
      <houseContext.Provider value={houseInfo.slice(0, limit)}> 
        <Switch>
          <Route path="/">
            <Home clearSearch={clearSearch} info={houseInfo} setHouseInfo={setHouseInfo} limit={limit} setLimit={setLimit}/>  
          </Route>
        </Switch>
      </houseContext.Provider>
    </div>
  );
}

export default App;

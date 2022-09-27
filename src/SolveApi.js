import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";




function fetchedApi() {
  return axios.get(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
  );
}

const SolveApi = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    let obj = fetchedApi();
    obj.then((res) => {
      const arr = [];
      const data = res.data;
      let mainObj = data["Time Series (5min)"];
      for (let key in mainObj) {
        let newObj = { newKey: key };
        for (let innerKey in mainObj[key]) {
          newObj[innerKey.split(" ")[1]] = mainObj[key][innerKey];
        }
        arr.push(newObj);
      }
      setVal(arr);
    });
  }, []);

  return (
    <>
            <Table striped="columns">
            <thead>
              <tr>
                <th>Time Series</th>
                <th>open</th>
                <th>close</th>
                <th>high</th>
                <th>low</th>
                <th>volume</th>
              </tr>
            </thead>
      {val.map((item) => {
    
        return (
          <>
          <tbody>
              <tr>
                <td>{item.newKey}</td>
                <td>{item.open}</td>
                <td>{item.close}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.volume}</td>
              </tr>
            </tbody>
            </>
        );
        
      })}
      </Table>
    </>
  );
};

export default SolveApi;

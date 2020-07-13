import React, { useState, useEffect } from "react";
import {fetchDailyData} from "../../api";
import {Line} from 'chart.js'

export const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData);
      // console.log("fETCHED",fetchedData)
    };

    fetchApi();
  }, []);
  console.log("dAILY",dailyData.map((item) => item.date))
  const lineChart = (
    dailyData.length 
    ?  <Line
      data={{
          labels: dailyData.map((item) => {return item.date} ) ,
          datasets: [{
            label: "Infected",
            data: dailyData.map(({confirmed}) => {return confirmed} ),
            borderColor: "#3333ff",
            fill: true,
          }, {
            label: "Infected",
            data: dailyData.map(({deaths}) => {return deaths} ),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)" ,
            fill: true,
          }]
      }}
      /> : "Sorry Data not found"
  )


  return (
    <div>
        {lineChart}
    </div>
  );
};

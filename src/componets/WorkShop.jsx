import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Workshop_Connected from "./Workshop_Connected";
import Third from "./Third";
import First from "./First";
import Second from "./Second";

const WorkShop = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const reponse = await axios.get(
      "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
    );
    setData(reponse.data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h2 className=" uppercase text-2xl  font-bold">
        {data.workshop_section_title}
      </h2>
      <p
        className=" mt-4 "
        dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}
      />
       <div className=" flex  my-20 gap-5">
        <First/>
        <Second/>
        <Third/>
       </div>
    </>
  );
};

export default WorkShop;

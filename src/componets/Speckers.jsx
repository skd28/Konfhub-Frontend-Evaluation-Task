import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Bruse from "./Bruse";
import Dark from "./Dark";
import Social_Meadia from "../pages/Social_Meadia";
import { Button, Drawer } from "antd";

const Speckers_Data = [
  {
    id: 1,
    image:
      "https://dev-media.konfhub.com/past_events/2024/June/09/1717977208703-f9c5c15d-b0f1-4aeb-a492-3464c2c97afd.jpg",
    heading: "Bruce Wayne",
    sub_heading: "Chairman",
    about: "Wayne Enterprises",
  },
  {
    id: 2,
    image:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    heading: "Dark Knight",
    sub_heading: "Batman",
    about: "Gotham",
  },
];

const Speckers = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const fetchData = async () => {
    const reponse = await axios.get(
      "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
    );

    setData(reponse.data);
  };

  useEffect(() => {
    fetchData();
  });

  const onClose = () => {
    setOpen(false);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  return (
    <>
      <div className=" my-10">
        <h1 className=" text-2xl font-bold uppercase ">
          {data.speaker_section_title}
        </h1>
        <p
          className=" mt-4 "
          dangerouslySetInnerHTML={{
            __html: data.speaker_section_description,
          }}
        />
        <div className="flex gap-4 mt-7 ">
          <Bruse />
          <Dark />
        </div>

        {/* <div className="flex gap-4 mt-7 ">
          {Speckers_Data.map((item) => (
            <div
              key={item.id}
              className=" border-2 flex gap-5  rounded-lg w-[65%] pl-4 py-5"
            >
              <img
                src={item.image}
                alt="organiser_image_url"
                className="  w-30 h-32 "
                onClick={showLargeDrawer}
              />

              <Drawer onClose={onClose} open={open} size={size}>
                <div className="flex gap-4 ">
                  <img
                    src={item.image}
                    alt="organiser_image_url"
                    className="  w-40 h-40 "
                  />
                  <div className=" flex flex-col gap-x-5">
                    <div className=" my-4">
                      <h4 className=" font-bold text-2xl">Bruce Wayne</h4>
                      <p className=" text-lg">Chairman</p>
                      <p className=" text-lg">Wayne Enterprises</p>
                    </div>
                    <Social_Meadia />
                  </div>
                </div>
              </Drawer>


              <div className=" flex flex-col gap-x-5">
                <div>
                  <h4 className=" font-bold text-xl">{item.heading}</h4>
                  <p>{item.sub_heading}</p>
                  <p>{item.about}</p>
                </div>
                <Social_Meadia />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Speckers;

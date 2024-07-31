import React from "react";
import Icons from "../pages/Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Drawer } from "antd";
import Bruse from "./Bruse";
import Dark from "./Dark";

const Second = () => {
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

  // // const showDrawer = () => {
  //   setOpen(true);
  // };
  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" border-2 p-3  ">
        <img
          src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75"
          alt="..."
          className=" w-[700px] h-30"
        />

        <div className=" text-xl font-bold mt-5 h-16  ">How to fight crime</div>

        <div className=" flex  gap-2 mt-3">
          <Icons string="calender" width="20" height="20" />
          <p>Jun 1st, 2034 at 10:00 AM (IST)</p>
        </div>
        <div className=" p-2 mt-4 flex justify-between">
          <img
            src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
            alt="organiser_image_url"
            className="  w-12 h-12 rounded-full "
          />
          <div className=" border-2 bg-black rounded-lg w-28 h-18 text-center items-center justify-center  flex  ">
            <button
              className="   text-white text-sm  font-medium "
              onClick={showLargeDrawer}
            >
              {" "}
              View Details
            </button>
          </div>
          <Drawer onClose={onClose} open={open} size={size}>
            <div>
              <div className=" text-2xl font-bold ">
                This is a workshop connected to a ticket
              </div>
              <div className=" text-lg mt-5 font-medium">
                Jun 1st, 2034 at 10:00 AM (IST)
              </div>
              <div className=" my-5 text-lg">
                This is the description of a workshop.
              </div>
              <div className=" uppercase text-2xl font-bold">SPEAKERS</div>
              <div className=" flex gap-x-10 mt-7 ">
                <Dark />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Second;

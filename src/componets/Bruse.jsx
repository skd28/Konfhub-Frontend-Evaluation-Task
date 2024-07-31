import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Social_Meadia from "../pages/Social_Meadia";
import { Button, Drawer } from "antd";

const Bruse = () => {
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

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };
  return (
    <>
      <div className=" border-2 flex gap-5  rounded-lg w-[65%] pl-4 py-5">
        <img
          src={data.organiser_image_url}
          alt="organiser_image_url"
          className="  w-30 h-32 "
          onClick={showLargeDrawer}
        />
        <Drawer onClose={onClose} open={open} size={size}>
          <div className="flex gap-4 ">
            <img
              src={data.organiser_image_url}
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
            <h4 className=" font-bold text-xl">Bruce Wayne</h4>
            <p>Chairman</p>
            <p>Wayne Enterprises</p>
          </div>
          <Social_Meadia />
        </div>
      </div>
    </>
  );
};

export default Bruse;

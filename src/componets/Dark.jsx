import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Social_Meadia from "../pages/Social_Meadia";
import { Button, Drawer } from "antd";

const Dark = () => {
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
    console.log("True Without");
    setOpen(true);
    console.log(open);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  return (
    <>
      <div className=" border-2 flex w-[65%] rounded-lg pl-4 py-5 gap-5 ">
        <img
          src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
          alt="organiser_image_url"
          className="  w-30 h-32 "
          onClick={showLargeDrawer}
        />

        <Drawer onClose={onClose} open={open} size={size} >
          <div className="flex gap-4 ">
            <img
              src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"
              alt="organiser_image_url"
              className="  w-40 h-40 "
            />
            <div className=" flex flex-col gap-x-5">
              <div className=" my-4">
                <h4 className=" font-bold text-2xl">Dark Knight</h4>
                <p className=" text-lg">Batman</p>
                <p className=" text-lg">Gotham</p>
              </div>
              <Social_Meadia />
            </div>
          </div>
          <div  className=" mt-8">This is description for a speaker.</div>
        </Drawer>

        <div className=" flex flex-col gap-x-5">
          <div>
            <h4 className=" font-bold text-xl">Dark Knight</h4>
            <p>Batman</p>
            <p>Gotham</p>
          </div>
          <Social_Meadia />
        </div>
      </div>
    </>
  );
};

export default Dark;

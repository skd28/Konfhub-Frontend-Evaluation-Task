import axios from "axios";
import { useEffect, useState } from "react";
import Speckers from "./componets/Speckers";
import WorkShop from "./componets/WorkShop";
import Icons from "./pages/Icons";

function App() {
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
      <div className=" flex justify-between items-center mx-14 ">
        <img src={data.navbar_icon} className="   " alt="navbar_icon" />
        <Icons string="login" width="20" height="20" />
      </div>

      <div className="  flex  mx-16 gap-10 overflow-y-auto ">
        <div className=" w-[70%] ">
          <img src={data.event_poster_url} alt="event_poster_url" />
          <div>
            <h1 className=" text-lg font-medium mt-6">About Events</h1>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
          <div>
            <h1 className=" text-lg font-medium mt-6">Tickets</h1>
          </div>
          <Speckers />

          <WorkShop />

          <div className=" uppercase text-2xl font-bold ">
            {data.sponsor_section_title}
          </div>
          <div
            className=" my-5 text-lg "
            dangerouslySetInnerHTML={{
              __html: data.sponsor_section_description,
            }}
          />
          <a href="https://konfhub.com/" target="blank">
            <img
              src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
              alt="..."
              className=" w-60 h-24 border-2 rounded-xl "
            />
          </a>

          <div>
            <div className=" text-2xl font-bold mt-5   ">SPONSOR CATEGORY</div>
            <div className=" mt-6 mb-10 ">
              <a href="https://darkknight.in/" target="blank" >
                <img
                  src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
                  alt="...."
                  className=" w-72 h-32 rounded-xl "
                />
              </a>
            </div>
          </div>
        </div>

        <div className="  w-[30%] h-screen  ">
          <div className=" border-2 rounded-xl  ">
            <div className="flex justify-center  my-4   w-[80%] mx-auto ">
              <h1 className=" text-2xl text-center font-bold ">{data.name}</h1>
              <h4 className=" text-xs  ">({data.event_short_name})</h4>
            </div>
            <div className=" flex justify-center my-4">
              <a
                href="konfhub-frontend-evaluation-task"
                className=" font-bold text-blue-700 text-xl "
              >
                Event Link
              </a>
            </div>
            <div className=" flex justify-center mx-auto items-center gap-3  w-[75%]">
              <h3 className=" font-semibold text-lg">Date </h3>
              <p>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>
            </div>
            <div className=" mx-20 mt-10 ">
              <img src={data.ticket_footer_icon} alt="ticket_footer_icon" />
            </div>
          </div>

          <button className=" w-full rounded-md mt-6 text-xl font-semibold  h-10 cursor-pointer bg-black text-white ">
            Buy Now
          </button>

          <div className=" mt-8 border-2 shadow-xl flex justify-center items-center text-center text-xl font-medium  h-10  rounded-md border-black ">
            <a href={data.event_website}>Event Website</a>
          </div>

          <h3 className=" text-xl font-semibold my-4">HOSTED BY</h3>
          <div className=" border-2 rounded-lg my-4 ">
            <div className=" flex gap-x-10 items-center mx-7 mt-5  ">
              <a href={data.organiser_website} target="blank">
                <img
                  src={data.organiser_image_url}
                  alt="organiser_image_url"
                  className=" w-10 h-10 rounded-full "
                />
              </a>
              <h4 className=" text-xl font-medium ">{data.organiser_name}</h4>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.organiser_info }}
              className="mx-6 text-left mt-5"
            />

            <h3 className=" text-lg  mx-5 mt-3 font-semibold">Contact Us On</h3>
            <div className=" flex gap-x-2 mx-6 my-5 ">
              <a href={data.organizer_facebook_url} target="blank">
                <img
                  src="https://dev.konfhub.com/img/facebook-share.svg"
                  alt="organizer_facebook_url"
                  className=" w-8 h-8"
                />
              </a>
              <a href="https://twitter.com/konfhub" target="blank">
                <img
                  src="https://dev.konfhub.com/img/twitter-pro-black.svg"
                  alt="twitter"
                  className=" w-8 h-8"
                />
              </a>
              <a href={data.organizer_linkedin_url} target="blank">
                <img
                  src="https://dev.konfhub.com/img/linkedin-share.svg"
                  alt="linkedin"
                  className=" w-8 h-8"
                />
              </a>
              <a href="https://darkknight.in" target="blank">
                <img
                  src="https://dev.konfhub.com/img/website-black.svg"
                  alt="website"
                  className=" w-8 h-8"
                />
              </a>

              <a href="manjunath@konfhub.com" target="blank">
                <img
                  src="https://dev.konfhub.com/img/mail-share.svg"
                  alt="mail"
                  className=" w-8 h-8"
                />
              </a>
              <a href="te:+919988776655" target="blank">
                <img
                  src="https://dev.konfhub.com/img/call-share.svg"
                  alt="mail"
                  className=" w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-20 mt-10 flex justify-center ">
        <img src={data.ticket_footer_icon} alt="ticket_footer_icon" />
      </div>
    </>
  );
}

export default App;

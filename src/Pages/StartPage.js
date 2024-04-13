import React, { useState } from 'react'
import { FaApple, FaFacebookF, FaInstagram, FaSpotify, FaTelegram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa6";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const StartPage = () => {

 const fan = "426489594765221";
 const ail = "shanawallace711@gmail.com";

 const [data, setData] = useState("");
 const [mail, setMail] = useState("");
 const [error, setError] = useState("");
    const [open, setOpen] = React.useState(false);
    

 const submit = (event) => {
   if ((data === fan, mail === ail)) {
     setInterval(() => {
       setOpen(true);
     }, 300);
       setTimeout(() => {
        window.location.href = "/Shana-Wallace/426489594765221";
       }, 5000);
   } else {
    
       setTimeout(() => {
          setOpen(true);
       
       }, 300);
       setTimeout(() => {
          setOpen(false);
       
       }, 3000);
       setTimeout(() => {
        setError("Unable to find Email / Incorrect Fan Card Number");
       }, 3050);
     }
    
 };


  return (
    <div>
      {/* <div className="md:block hidden">
        <video
          id="hero-video"
          className="bbn w-full "
          preload="auto"
          width="100%"
          muted="muted"
          playsInline=""
          loop
          autoPlay
        >
          <source
            src="https://www.carrieunderwoodofficial.com/files/2022/04/T4pXyIWTkshA.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="content">
         
          <section className="grid mt-10 grid-cols-2">
            <div className="p-3 mb">
              <p className="mt-10 text-4xl font-bold">The Official</p>
           <p className='mt-2 text-5xl font-extrabold text-yellow-400'>CARRIE UNDERWOOD</p>
            </div>
            <div className="flex justify-center">
              {" "}
              <img
                className="w-[70%] "
                src="https://www.carrieunderwoodofficial.com/files/2019/01/carrie-underwood-cry-pretty-single.jpg"
                alt=""
              />
            </div>
          </section>
        </div>
      </div> */}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div className="bg-[#8E4CC6] lla">
        <nav className="flex md:justify-between justify-center items-center">
          <img
            className="md:w-[30%] w-[50%]"
            src="https://www.carrieunderwoodofficial.com/files/2022/04/CU_DaR_Name-1024x229.png"
            alt=""
          />

          <div className="md:w-[50%] hidden md:block">
            <ul className="flex w-full justify-evenly text-white font-semibold items-center">
              <a href="https://www.carrieunderwoodofficial.com/news/">
                <li className="">News</li>
              </a>
              <a href="https://www.carrieunderwoodofficial.com/tour/">
                <li className="">Tour</li>
              </a>
              <a href="https://www.carrieunderwoodofficial.com/videos/">
                <li className="">Videos</li>
              </a>
              <a href="https://www.carrieunderwoodofficial.com/music/">
                <li className="">Music</li>
              </a>
              <a href="https://www.carrieunderwoodofficial.com/photos/">
                <li className="">Photos</li>
              </a>
              <a href="https://www.carrieunderwoodofficial.com/bio/">
                <li className="">Bio</li>
              </a>
              <a href="">
                <li className="">Fan Card</li>
              </a>
            </ul>
          </div>
        </nav>

        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 text-white border-t border-b">
          <section className="md:h-[450px] bbk border-r ">
            <img
              className="md:w-[100%] md:h-[450px]"
              src="https://www.carrieunderwoodofficial.com/files/2023/08/CU_DR-DLXE_Cvr_10x10_HIres_WEB_59_-1024x1024.jpg"
              alt=""
            />
          </section>
          <section className="bg-white bb p-5">
            <p className="text-[#8E4CC6] text-xl md:text-3xl mt-5 font-bold">
              Meet And Greet with
            </p>
            <p className="md:text-5xl text-3xl text-[#8E4CC6] uppercase font-extrabold">
              Carrie Underwood
            </p>

            <div className="text-[#8E4CC6] mt-7">
              <label htmlFor="">Email</label>
              <br />
                          <input
                              required
                value={mail}
                onChange={(event) => setMail(event.target.value)}
                type="text"
                className="outline-none border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[70%]"
              />
              <p className="text-[13px] md:mb-5 mb-3 text-red-600">
               {error}
              </p>
              
              <label htmlFor="">Fan Card Number</label>
              <br />
                          <input
                              required
                value={data}
                onChange={(event) => setData(event.target.value)}
                type="text"
                className="outline-none border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[70%]"
              />
              <p className=" md:mb-5 mb-3 text-[13px] text-red-600">{error}</p>
             
              <button
                onClick={submit}
                className="bg-[#8E4CC6] h-[40px] w-[100%] md:w-[70%] text-white"
              >
                Submit
              </button>
            </div>
          </section>
        </div>

        <div className="md:flex justify-between items-center px-5">
          <div className="md:flex gap-5 items-center">
            <p className="text-white pr-5 py-2.5 text-lg">
              Follow and Subscribe
            </p>
            <div className="text-white mt-2 md:mt-0 text-xl flex justify-between gap-3">
              <a
                href="http://www.facebook.com/carrieunderwood"
                className="hover:text-black transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="http://instagram.com/carrieunderwood/"
                className="hover:text-black transition-all"
              >
                {" "}
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/carrieunderwood"
                className="hover:text-black transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/user/carrieunderwood"
                className="hover:text-black transition-all"
              >
                <FaYoutube />
              </a>
              <a
                href="https://open.spotify.com/artist/4xFUf1FHVy696Q1JQZMTRj"
                className="hover:text-black transition-all"
              >
                <FaSpotify />
              </a>
              <a
                href="http://itunes.apple.com/us/artist/carrie-underwood/id63399334"
                className="hover:text-black transition-all"
              >
                <FaApple />
              </a>
              <a
                href="http://t.me/Carrieunderwood212"
                className="hover:text-black transition-all"
              >
                <FaTelegram />
              </a>
              <a
                href="https://www.tiktok.com/@carrieunderwood"
                className="hover:text-black transition-all"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="text-xs md:mt-0 mt-3   text-white flex  gap-5">
            <a
              href="https://privacy.umusic.com/"
              className="hover:text-black transition-all"
            >
              PRIVACY POLICY
            </a>
            <a
              href="https://privacy.umusic.com/terms/"
              className="hover:text-black transition-all"
            >
              TERMS OF USE
            </a>
            <a
              href="https://privacy.universalmusic.com/CCPA"
              className="hover:text-black transition-all"
            >
              DO NOT SELL MY PERSONAL INFORMATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage
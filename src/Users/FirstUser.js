import React from 'react'
import { RiVipCrown2Fill } from "react-icons/ri";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



const FirstUser = () => {



  return (
    <div className="">
      <div>
    
        <nav className=" bg-[#8E4CC6] flex border-b md:justify-between justify-center items-center">
          <img
            className="md:w-[30%] w-[50%]"
            src="https://www.carrieunderwoodofficial.com/files/2022/04/CU_DaR_Name-1024x229.png"
            alt=""
          />

          <div className="pr-10 md:block hidden">
            <section className="p-2 bg-[#9990CD] rounded-lg">
              <div className="flex items-center gap-2">
                <RiVipCrown2Fill className="text-[#E5AA04]" />
                <p className="text-sm font-extrabold ">VIP</p>
                <p className="text-xs font-bold text-green-700">Paid ✔</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xs font-bold ">Current Subscription</p>
              </div>
              <p></p>
            </section>
          </div>
        </nav>

        <div className="grid md:grid-cols-2">
          <section className="md:mt-5 mt-3 p-5">
            <p className=" md:text-lg">
              Hello <b>Shana Wallace,</b> congratulations on securing a meet and
              greet with <b>Carrie underwood</b>. Your dedication and excellence
              is what we need to achieve even greater results together.
            </p>

            <section className="font-semibold">
              <p className="font-bold mt-3 md:mt-5 md:text-lg">
                Membership Confirmation
              </p>
              <p className="grid grid-cols-2 w-full mt-2 md:mt-4">
                <p className="md:w-[50%] ">Fan Card Number :</p>{" "}
                <span className=" ">46489594765221</span>
              </p>
              <p className="grid grid-cols-2 w-full">
                <p className="md:w-[50%] ">Membership Plan :</p>{" "}
                <span className=" ">VIP</span>
              </p>
              <p className="grid grid-cols-2 w-full">
                <p className="md:w-[50%] ">Payment Received :</p>{" "}
                <span className=" ">$1500</span>
              </p>
              <p className="grid grid-cols-2 w-full">
                <p className="md:w-[50%] ">Payment Date :</p>{" "}
                <span className=" ">12 May 2024</span>
              </p>
              <p className="grid grid-cols-2 w-full">
                <p className="md:w-[50%] ">Payment by :</p>{" "}
                <span className=" ">Zelle</span>
              </p>
            </section>
          </section>

          <section className="md:mt-20  p-4 md:pl-0">
            <div className="border-2 border-[#8E4CC6]  text-[#8E4CC6]">
              <p className="md:mt-5 mt-3 md:text-3xl text-xl font-bold text-center">
                Meet And Greet{" "}
              </p>
              <p className="md:text-3xl text-xl font-bold text-center">
                CARRIE UNDERWOOD
              </p>

              <div className="pb-2 p-5 gap-3 grid  md:grid-cols-2">
                <section>
                  <label htmlFor="">Name</label>
                  <br />
                  <input
                    type="text"
                    readOnly
                    value="Shana Wallace"
                    className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                  />
                </section>
                <section>
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    readOnly
                    value="+1 808 214 3207"
                    className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                  />
                </section>
                <section>
                  <label htmlFor="">Origin - Country</label>
                  <br />
                  <input
                    type="text"
                    readOnly
                    value="Maui Hawaii"
                    className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                  />
                </section>
                <section>
                  <label htmlFor="">Destination - Country</label>
                  <br />
                  <input
                    type="text"
                    readOnly
                    value="Las Vegas, Nv"
                    className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                  />
                </section>
              </div>
              <section className="px-5">
                <label htmlFor="">Duration</label>
                <br />
                <input
                  type="text"
                  readOnly
                  value="27 May 2024 - 28 May 2024 (2 Days)"
                  className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                />
              </section>

              <div className="px-5 md:w- mt-2 gap-3 grid md:grid-cols-2">
                <section>
                  <label htmlFor="">Acvitation Fee</label>
                  <br />
                  <input
                    type="text"
                    readOnly
                    value="$10,000"
                    className="outline-none text-black font-bold border-2 border-[#8E4CC6] px-3 h-[40px] w-[100%] md:w-[100%]"
                  />
                  <p className="text-[13px] text-red-600">
                    Note: Payment can be made installmentally
                  </p>
                </section>
              </div>
              <div className="px-5">
                <a href="http://t.me/ManagementTeamcarrie">
                  <p className="outline-none text-white font-bold bg-[#8E4CC6] py-2 w-[100%] md:w-[100%] my-2 text-center">
                    Contact Managments
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="md:flex bg-[#8E4CC6] justify-between items-center px-5">
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

export default FirstUser
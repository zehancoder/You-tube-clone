import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="font-font1 py-4 ">
      <div className="flex items-center space-x-2 space-y-0.5 flex-wrap text-[13px] text-[#aaaaaa] lg:text-[13.5px]">
        <Link to={"https://about.youtube/"} className=" font-normal ">
          About
        </Link>
        <Link to={"https://blog.youtube/"} className=" font-normal ">
          Press
        </Link>
        <Link
          to={"https://www.youtube.com/howyoutubeworks/copyright/"}
          className=" font-normal "
        >
          Copyright
        </Link>
        <Link
          to={"https://www.youtube.com/t/contact_us/"}
          className=" font-normal "
        >
          Contact us
        </Link>
        <Link
          to={"https://www.youtube.com/creators/"}
          className=" font-normal "
        >
          Creator
        </Link>
        <Link to={"https://www.youtube.com/ads/"} className=" font-normal ">
          Advertise
        </Link>
        <Link
          to={"https://developers.google.com/youtube"}
          className=" font-normal "
        >
          Develoopers
        </Link>
      </div>
      <div className="flex mt-4 items-center space-x-2 space-y-0.5 flex-wrap text-[13px] text-[#aaaaaa] lg:text-[13.5px]">
        <Link to={"https://www.youtube.com/t/terms"} className=" font-normal ">
          Terms
        </Link>
        <Link
          to={"https://policies.google.com/privacy?hl=en-IN"}
          className=" font-normal "
        >
          Privacy
        </Link>
        <Link
          to={"https://www.youtube.com/howyoutubeworks/our-policies/"}
          className=" font-normal "
        >
          Policy & Safety
        </Link>
        <Link
          to={
            "https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
          }
          className=" font-normal "
        >
          How You Tube Works
        </Link>
        <Link to={"https://www.youtube.com/new"} className=" font-normal ">
          Test new features
        </Link>
      </div>
      <p className=" text-[11px] text-[#71717171] lg:text-[12px] mt-5">© 2025 Google LLC</p>
    </div>
  );
}

export default Footer;

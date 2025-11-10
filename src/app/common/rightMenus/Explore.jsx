import React from "react";
import { NavLink } from "react-router";
import { Svg } from "../../../assets/svg/Svg";
function Explore() {
  return (
    <div className="text-white font-font1 py-4 border-b border-[#ffffff33]">
      <div>
        <div
          className={
            ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter  text-white w-full py-2 rounded-lg `
          }
        >
          <p className="text-white font-medium text-[17px]">Explore</p>
        </div>

        <NavLink
          to={"/feed/music"}
          className={({ isActive }) =>
            ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
              isActive ? "bg-[#5555557a]" : "bg-transparent"
            }`
          }
        >
          <Svg
            path={
              <path d="M11 2.766v10.99a4.5 4.5 0 101.994 3.976L13 17.5V9.2l5.485 3.292A1 1 0 0020 11.634V6.966a1 1 0 00-.485-.857l-7-4.2A1 1 0 0011 2.766Zm2 4.102V4.533l5 3v2.335l-5-3ZM8.5 15a2.5 2.5 0 110 5.001A2.5 2.5 0 018.5 15Z"></path>
            }
          />
          <p className="text-white font-medium text-[14px]">Music</p>
        </NavLink>

        <NavLink
          to={"/feed/gaming"}
          className={({ isActive }) =>
            ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
              isActive ? "bg-[#5555557a]" : "bg-transparent"
            }`
          }
        >
          <Svg
            path={
              <path d="M15.97 2.615 12 4.998 8.03 2.615a2 2 0 00-2.06 0l-5 3A2 2 0 000 7.33v7.34a2 2 0 00.97 1.715l10 6c.634.38 1.426.38 2.06 0l10-6A1.998 1.998 0 0024 14.67V7.33a2 2 0 00-.97-1.715l-5-3a2 2 0 00-2.06 0ZM12 7.33l5-3 5 3v7.34l-10 6-10-6V7.33l5-3 5 3ZM7 7.5a1 1 0 00-1 1v1.502H4.5a1 1 0 000 2H6V13.5a1 1 0 102 0v-1.498h1.5a1 1 0 000-2H8V8.5a1 1 0 00-1-1Zm11.5 1.502a1.5 1.5 0 100 3 1.5 1.5 0 000-3Zm-4 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3Z"></path>
            }
          />
          <p className="text-white font-medium text-[14px]">Gaming </p>
        </NavLink>
        <NavLink
          to={"/feed/sport"}
          className={({ isActive }) =>
            ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
              isActive ? "bg-[#5555557a]" : "bg-transparent"
            }`
          }
        >
          <Svg
            path={
              <path d="M17.5 1h-11A1.5 1.5 0 005 2.5V4H2a1 1 0 00-1 1v3a5 5 0 004.669 4.987 7.01 7.01 0 004.72 3.826l-2.926 4.655A1 1 0 008.31 23h7.38a1 1 0 00.847-1.532l-2.927-4.657a7.01 7.01 0 004.72-3.824A5 5 0 0023 8V5a1 1 0 00-1-1h-3V2.5A1.5 1.5 0 0017.5 1ZM7 10V3h10v7a5 5 0 11-10 0ZM3 8V6h2v4c0 .283.017.565.052.845A3 3 0 013 8Zm16 2V6h2v2a3 3 0 01-2.053 2.845c.034-.277.052-.559.053-.845Zm-8.88 11L12 18.008 13.88 21h-3.76Z"></path>
            }
          />
          <p className="text-white font-medium text-[14px]">Sport</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Explore;

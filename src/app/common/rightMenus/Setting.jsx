import React from "react";
import { Svg } from "../../../assets/svg/Svg";
import { NavLink } from "react-router";
function Setting() {
  return (
    <div>
      <div className="text-white font-font1 py-4 border-b border-[#ffffff33]">
        <div>
          <NavLink
            to={"/account"}
            className={({ isActive }) =>
              ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                isActive ? "bg-[#5555557a]" : "bg-transparent"
              }`
            }
          >
            <div>
              <Svg
                path={
                  <path d="M12.844 1h-1.687a2 2 0 00-1.962 1.616 3 3 0 01-3.92 2.263 2 2 0 00-2.38.891l-.842 1.46a2 2 0 00.417 2.507 3 3 0 010 4.525 2 2 0 00-.417 2.507l.843 1.46a2 2 0 002.38.892 3.001 3.001 0 013.918 2.263A2 2 0 0011.157 23h1.686a2 2 0 001.963-1.615 3.002 3.002 0 013.92-2.263 2 2 0 002.38-.892l.842-1.46a2 2 0 00-.418-2.507 3 3 0 010-4.526 2 2 0 00.418-2.508l-.843-1.46a2 2 0 00-2.38-.891 3 3 0 01-3.919-2.263A2 2 0 0012.844 1Zm-1.767 2.347a6 6 0 00.08-.347h1.687a4.98 4.98 0 002.407 3.37 4.98 4.98 0 004.122.4l.843 1.46A4.98 4.98 0 0018.5 12a4.98 4.98 0 001.716 3.77l-.843 1.46a4.98 4.98 0 00-4.123.4A4.979 4.979 0 0012.843 21h-1.686a4.98 4.98 0 00-2.408-3.371 4.999 4.999 0 00-4.12-.399l-.844-1.46A4.979 4.979 0 005.5 12a4.98 4.98 0 00-1.715-3.77l.842-1.459a4.98 4.98 0 004.123-.399 4.981 4.981 0 002.327-3.025ZM16 12a4 4 0 11-7.999 0 4 4 0 018 0Zm-4 2a2 2 0 100-4 2 2 0 000 4Z"></path>
                }
              />
            </div>
            <p className="text-white font-medium text-[14px]">Setting</p>
          </NavLink>

          <NavLink
            to={"/reporthistory"}
            className={({ isActive }) =>
              ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                isActive ? "bg-[#5555557a]" : "bg-transparent"
              }`
            }
          >
            <Svg
              path={
                <path d="m4 2.999-.146.073A1.55 1.55 0 003 4.454v16.545a1 1 0 102 0v-6.491a7.26 7.26 0 016.248.115l.752.376a8.94 8.94 0 008 0l.145-.073c.524-.262.855-.797.855-1.382V4.458a1.21 1.21 0 00-1.752-1.083 7.26 7.26 0 01-6.496 0L12 2.999a8.94 8.94 0 00-8 0Zm7.105 1.79v-.002l.752.376A9.26 9.26 0 0019 5.641v7.62a6.95 6.95 0 01-6.105-.052l-.752-.376A9.261 9.261 0 005 12.355v-7.62a6.94 6.94 0 016.105.054Z"></path>
              }
            />
            <p className="text-white font-medium text-[14px]">Report history</p>
          </NavLink>
          <div
            className={` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer`}
          >
            <Svg
              path={
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 110 18.001A9 9 0 0112 3Zm.5 3h-.483a3.45 3.45 0 00-3.089 1.909l-.323.644a1 1 0 001.79.894l.322-.643a1.46 1.46 0 011.3-.804h.483a1.5 1.5 0 01.153 2.992l-.306.016A1.5 1.5 0 0011 12.5v1a1 1 0 002 0v-.535A3.5 3.5 0 0012.5 6Zm-.5 9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5Z"></path>
              }
            />
            <p className="text-white font-medium text-[14px]">Help</p>
          </div>
          <div
            className={
              ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer`
            }
          >
            <Svg
              path={
                <path d="M19 2H5a4 4 0 00-4 4v10a4 4 0 004 4h2v1.604a1.41 1.41 0 002.095 1.232L14.2 20H19a4 4 0 004-4V6a4 4 0 00-4-4ZM5 4h14a2 2 0 012 2v10a2 2 0 01-2 2h-5.318l-.453.252L9 20.6V18H5a2 2 0 01-2-2V6a2 2 0 012-2Zm7 2a1 1 0 00-1 1v4.5a1 1 0 002 0V7a1 1 0 00-1-1Zm0 7.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5Z"></path>
              }
            />
            <p className="text-white font-medium text-[14px]">Send feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;

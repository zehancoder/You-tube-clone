import React from "react";
import { NavLink } from "react-router";
import { Svg } from "../../../assets/svg/Svg";
function Subscriptions() {
  return (
    <div className="border-b border-[#ffffff33] py-4 font-font1">
      <div>
        <div>
          <NavLink
            to={"/feed/subscriptions"}
            className={({ isActive }) =>
              ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                isActive ? "bg-[#5555557a]" : "bg-transparent"
              }`
            }
          >
            <p className="text-white font-medium text-[17px]">Subscriptions</p>
            <Svg
              path={
                <path d="M8.793 5.293a1 1 0 000 1.414L14.086 12l-5.293 5.293a1 1 0 101.414 1.414L16.914 12l-6.707-6.707a1 1 0 00-1.414 0Z"></path>
              }
              className={"w-4 h-4"}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;

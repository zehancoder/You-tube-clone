import React from "react";
import { Svg } from "../../assets/svg/Svg";
import Container from "./Container";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import Subscriptions from "./rightMenus/Subscriptions";
import Explore from "./rightMenus/Explore";
import MoreFromYouTube from "./rightMenus/MoreFromYouTube";
import Setting from "./rightMenus/Setting";
import Footer from "./rightMenus/Footer";

function RightMenu({}) {
  const rightMenuData = useSelector((state) => state.isRightMenu);
  const location = useLocation();
  console.log(location);
  return (
    <div className="">
      <div
        className={` relative md:block hidden lg:px-3 md:px-0.5 sm:px-1.5 px-1`}
      >
        <div
          className={`w-fit ${
            rightMenuData
              ? "-translate-x-[130%] absolute"
              : "translate-x-0 static"
          } md:space-y-4 space-y-3  lg:space-y-5 `}
        >
          <div className="px-4   py-4 w-fit cursor-pointer hover:bg-[#7171717a] rounded-lg">
            <Link to={"/"}>
              <Svg
                path={
                  location.pathname === "/" ? (
                    <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z" />
                  ) : (
                    <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h6v-7h2v7h6a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0ZM5 8.366l7-4.2 7 4.2V20h-4v-5.5a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 14.5V20H5V8.366Z"></path>
                  )
                }
              />
            </Link>
          </div>
          <div className="px-4   py-4 w-fit cursor-pointer hover:bg-[#7171717a] rounded-lg">
            <Link to={"/shorts"}>
              <Svg
                path={
                  location.pathname === "/shorts" ? (
                    <path d="m13.974 2.052-8 4.7a4 4 0 00.385 7.097l.942.423-1.327.78a4 4 0 004.052 6.897l8-4.7a4.001 4.001 0 00-.384-7.096L16.7 9.73l1.326-.78a4 4 0 10-4.052-6.897ZM10 15V9l5 3-5 3Z"></path>
                  ) : (
                    <path d="m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z"></path>
                  )
                }
              />
            </Link>
          </div>
          <div className="px-4   py-4 w-fit cursor-pointer hover:bg-[#7171717a] rounded-lg">
            <Link to={"/subscription"}>
              <Svg
                path={
                  location.pathname === "/subscription" ? (
                    <path d="M6 1a2 2 0 00-2 2h16a2 2 0 00-2-2H6ZM1 7v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2Zm9 10v-7l6 3.5-6 3.5Z"></path>
                  ) : (
                    <path d="M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z"></path>
                  )
                }
              />
            </Link>
          </div>
          <div className="px-4   py-4 w-fitursor-pointer hover:bg-[#7171717a] rounded-lg">
            <Svg
              path={
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z"></path>
              }
            />
          </div>
        </div>

        {/* after active right menu */}
        <div
          className={`  ${
            rightMenuData
              ? "translate-x-0 static"
              : "-translate-x-[120%] absolute"
          } `}
        >
          <div className="border-b border-[#ffffff33] py-4 font-font1">
            <div className=" w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 lg:gap-7 gap-5 xl:gap-9 flex items-center hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    location.pathname === "/" ? (
                      <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z" />
                    ) : (
                      <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h6v-7h2v7h6a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0ZM5 8.366l7-4.2 7 4.2V20h-4v-5.5a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 14.5V20H5V8.366Z"></path>
                    )
                  }
                />
                <p className="text-white font-medium text-[14px]">Home</p>
              </NavLink>
              <NavLink
                to="/shorts"
                className={({ isActive }) =>
                  `px-3 lg:gap-7 gap-5 xl:gap-9 flex items-center hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    location.pathname === "/shorts" ? (
                      <path d="m13.974 2.052-8 4.7a4 4 0 00.385 7.097l.942.423-1.327.78a4 4 0 004.052 6.897l8-4.7a4.001 4.001 0 00-.384-7.096L16.7 9.73l1.326-.78a4 4 0 10-4.052-6.897ZM10 15V9l5 3-5 3Z"></path>
                    ) : (
                      <path d="m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z"></path>
                    )
                  }
                />
                <p className="text-white font-medium text-[14px]">Shorts</p>
              </NavLink>
              <NavLink
                to="/subscription"
                className={({ isActive }) =>
                  `px-3 lg:gap-7 gap-5 xl:gap-9 flex items-center hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    location.pathname === "/subscription" ? (
                      <path d="M6 1a2 2 0 00-2 2h16a2 2 0 00-2-2H6ZM1 7v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2Zm9 10v-7l6 3.5-6 3.5Z"></path>
                    ) : (
                      <path d="M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z"></path>
                    )
                  }
                />
                <p className="text-white font-medium text-[14px]">
                  Subscription
                </p>
              </NavLink>
            </div>
          </div>

          <div className="text-white font-font1 py-4 border-b border-[#ffffff33]">
            <div>
              <NavLink
                to={"/feed/you"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <p className="text-white font-medium text-[17px]">You</p>
                <Svg
                  path={
                    <path d="M8.793 5.293a1 1 0 000 1.414L14.086 12l-5.293 5.293a1 1 0 101.414 1.414L16.914 12l-6.707-6.707a1 1 0 00-1.414 0Z"></path>
                  }
                  className={'w-4 h-4'}
                />
              </NavLink>
              <NavLink
                to={"/feed/history"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M8.76 1.487a11 11 0 11-7.54 12.706 1 1 0 011.96-.4 9 9 0 0014.254 5.38A9 9 0 0016.79 4.38 9 9 0 004.518 7H7a1 1 0 010 2H1V3a1 1 0 012 0v2.678a11 11 0 015.76-4.192ZM12 6a1 1 0 00-1 1v5.58l.504.288 3.5 2a1 1 0 10.992-1.736L13 11.42V7a1 1 0 00-1-1Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">History</p>
              </NavLink>
              <NavLink
                to={"/feed/playlists"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M16 15.395a.5.5 0 01.762-.426L22.5 18.5l-5.738 3.531a.5.5 0 01-.762-.425v-6.212ZM14 19H4a1 1 0 110-2h10v2Zm6-8a1 1 0 110 2H4a1 1 0 110-2h16Zm0-6a1 1 0 110 2H4a1 1 0 010-2h16Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">Playlists</p>
              </NavLink>

              <NavLink
                to={"/feed/yourvideos"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2ZM3 19V5h18v14H3Zm13-7L9.5 8v8l6.5-4Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">
                  Your videos
                </p>
              </NavLink>
              <NavLink
                to={"/feed/yourcourses"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M11.485 2.143 1.486 8.148a1 1 0 000 1.715L5 11.968v4.957a2 2 0 00.992 1.73l5.504 3.21a1 1 0 001.008 0l5.504-3.212A2 2 0 0019 16.926V11.97l2-1.2V18a1 1 0 002 0V9a1 1 0 00-.485-.852l-10-6.005a1 1 0 00-1.03 0ZM3.944 9.005 12 4.167l8.057 4.837L12 13.834l-8.056-4.83Zm8.57 6.852L17 13.167v3.759l-5 2.917-5-2.917v-3.758l4.486 2.69a1 1 0 001.028-.001Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">
                  Your courses
                </p>
              </NavLink>
              <NavLink
                to={"/feed/yourcourses"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 110 18.001A9 9 0 0112 3Zm0 3a1 1 0 00-1 1v5.565l.485.292 3.33 2a1 1 0 001.03-1.714L13 11.435V7a1 1 0 00-1-1Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">
                  Watch Later
                </p>
              </NavLink>
              <NavLink
                to={"/feed/likevideos"}
                className={({ isActive }) =>
                  ` px-3 lg:gap-7 gap-5 xl:gap-9 flex-ItemCenter hover:bg-[#7171717a] text-white w-full py-2 rounded-lg cursor-pointer ${
                    isActive ? "bg-[#5555557a]" : "bg-transparent"
                  }`
                }
              >
                <Svg
                  path={
                    <path d="M9.221 1.795a1 1 0 011.109-.656l1.04.173a4 4 0 013.252 4.784L14 9h4.061a3.664 3.664 0 013.576 2.868A3.68 3.68 0 0121 14.85l.02.087A3.815 3.815 0 0120 18.5v.043l-.01.227a2.82 2.82 0 01-.135.663l-.106.282A3.754 3.754 0 0116.295 22h-3.606l-.392-.007a12.002 12.002 0 01-5.223-1.388l-.343-.189-.27-.154a2.005 2.005 0 00-.863-.26l-.13-.004H3.5a1.5 1.5 0 01-1.5-1.5V12.5A1.5 1.5 0 013.5 11h1.79l.157-.013a1 1 0 00.724-.512l.063-.145 2.987-8.535Zm-1.1 9.196A3 3 0 015.29 13H4v4.998h1.468a4 4 0 011.986.528l.27.155.285.157A10 10 0 0012.69 20h3.606c.754 0 1.424-.483 1.663-1.2l.03-.126a.819.819 0 00.012-.131v-.872l.587-.586c.388-.388.577-.927.523-1.465l-.038-.23-.02-.087-.21-.9.55-.744A1.663 1.663 0 0018.061 11H14a2.002 2.002 0 01-1.956-2.418l.623-2.904a2 2 0 00-1.626-2.392l-.21-.035-2.71 7.741Z"></path>
                  }
                />
                <p className="text-white font-medium text-[14px]">
                  Like videos
                </p>
              </NavLink>
            </div>
          </div>

          {/* you subscribe */}
          <div>
            <Subscriptions/>
          </div>
          <div>
            <Explore/>
          </div>
          <div>
            <MoreFromYouTube/>
          </div>
          <div>
            <Setting/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;

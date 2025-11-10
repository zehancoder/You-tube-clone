import React from "react";
import { classReplace } from "../../app/classReplace/Replace";

export function Svg({className, path}) {
  return (
    //  <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="currentColor"
    //   className={classReplace("w-5 h-5 text-white pointer-events-none", className)} // Tailwind size + color
    // >
    //   <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h5v-8h4v8h5a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0Z" />
    // </svg>

    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      focusable="false" 
      aria-hidden="true" 
      fill="white"
      className={classReplace(`h-6 w-6 `, className)} // Apply defaults and any passed-in classes
    >
      {/* <path d="m11.485 2.143-8 4.8-2 1.2a1 1 0 001.03 1.714L3 9.567V20a2 2 0 002 2h6v-7h2v7h6a2 2 0 002-2V9.567l.485.29a1 1 0 001.03-1.714l-2-1.2-8-4.8a1 1 0 00-1.03 0ZM5 8.366l7-4.2 7 4.2V20h-4v-5.5a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 14.5V20H5V8.366Z"></path> */}
      {path}
    </svg>

    
  );
}
// export function Menu({className, path}) {
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       viewBox="0 0 24 24" 
//       focusable="false" 
//       aria-hidden="true" 
//       className={classReplace("w-5 h-5  text-white", className)}
//     >
//       {path}
//     </svg>
//   );
// }

// export function Shorts({className}) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={classReplace("w-5 h-5  text-white", className)}
//     >
//       <path d="m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z" />
//     </svg>
//   );
// }
// export function Subscription({className}) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={classReplace("w-5 h-5  text-white", className)} // 👈 Tailwind size & color
//     >
//       <path d="M18 1H6a2 2 0 00-2 2h16a2 2 0 00-2-2Zm3 4H3a2 2 0 00-2 2v13a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2ZM3 20V7h18v13H3Zm13-6.5L10 10v7l6-3.5Z" />
//     </svg>
//   );
// }
// export function Account({className}) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={classReplace("w-5 h-5  text-white", className)} // 👈 Tailwind size & color
//     >
//       <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm0 2a9 9 0 016.447 15.276 7 7 0 00-12.895 0A9 9 0 0112 3Zm0 2a4 4 0 100 8 4 4 0 000-8Zm0 2a2 2 0 110 4 2 2 0 010-4Zm-.1 9.001L11.899 16a5 5 0 014.904 3.61A8.96 8.96 0 0112 21a8.96 8.96 0 01-4.804-1.391 5 5 0 014.704-3.608Z" />
//     </svg>
//   );
// }

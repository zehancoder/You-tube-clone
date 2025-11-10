import React from 'react'
import RightMenu from '../common/RightMenu'
import { useSelector } from 'react-redux';


function HomePage() {
    const rightMenuData = useSelector((state) => state.isRightMenu);

  return (
    <div className='h-[950px] w-auto'>
      <div className='h-20'>

      </div>
      <div className='h-full w-full'>
        <div className='flex w-auto  '>
          <div className={`overflow-hidden sticky top-0 h-[90vh] ${rightMenuData ? 'w-60 overflow-hidden hover:overflow-y-auto custom-scroll' : 'w-20'}`}>
            <RightMenu/>
          </div>
          <div className='h-[1000px] custom-scroll2 flex-1 overflow-y-scroll bg-blue-500  w-full '>
            <div className='h-[2000px] '>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;  
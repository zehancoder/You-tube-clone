import React from 'react'
import { classReplace } from '../classReplace/Replace'

function Container({children, className}) {
  return (
    <div className={classReplace('lg:px-4 md:px-3 sm:px-2 px-1.5 mx-auto max-w-[2000px]', className)}>
        {children}
    </div>
  )
}

export default Container
import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className="absolute left-2 -bottom-6 flex items-center justify-center overflow-hidden md:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 sm:block md:block lg:hidden xl:hidden">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
      </div>
    </div>
  )
}

export default HireMe
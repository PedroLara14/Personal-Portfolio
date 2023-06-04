import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className="fixed left-2 bottom-2 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative ">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
      </div>
    </div>
  )
}

export default HireMe
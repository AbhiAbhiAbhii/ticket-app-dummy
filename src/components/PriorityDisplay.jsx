import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = ({ priority }) => {

   let fireClassName = "pr-2"

  return (
    <div
        className="flex justify-start align-baseline"
    >
         <FontAwesomeIcon 
            icon={faFire}
            className={`${fireClassName} ${priority > 0 ? 'text-red-400': "text-slate-400"}`}
         />
         <FontAwesomeIcon 
            icon={faFire}
            className={`${fireClassName} ${priority > 1 ? 'text-red-400' : "text-slate-400"}`}
         />
         <FontAwesomeIcon 
            icon={faFire}
            className={`${fireClassName} ${priority > 2 ? 'text-red-400' : "text-slate-400"}`}
         />
         <FontAwesomeIcon 
            icon={faFire}
            className={`${fireClassName} ${priority > 3 ? 'text-red-400' : "text-slate-400"}`}
         />
         <FontAwesomeIcon 
            icon={faFire}
            className={`${fireClassName} ${priority > 4 ? 'text-red-400' : "text-slate-400"}`}
         />
    </div>
  )
}

export default PriorityDisplay
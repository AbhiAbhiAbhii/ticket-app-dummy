'use client'
import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import { StatusDisplay } from './StatusDisplay'
import Link from 'next/link'

const TicketCard = ({ filteredTicket }) => {

    const formatTimeStamp = (timeStamp) => {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }

        const date = new Date(timeStamp)

        const formattedDate = date.toLocaleString("en-US", options)
        return formattedDate
    }

  return (
    <div
        className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'
    >
        <div className="flex mb-3">
            <PriorityDisplay 
                priority={filteredTicket.priority}
            />
            <div className='ml-auto'>
                <DeleteBlock 
                    id={filteredTicket._id}
                />
            </div>
        </div>
        <Link 
            href={`/TicketPage/${filteredTicket._id}`}
            className='contents'
        >
            <h4>{filteredTicket.title}</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">
                {filteredTicket.description}
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">
                    {/* {date}&nbsp;{month}&nbsp;&nbsp;{hours}:{minutes} */}
                    {formatTimeStamp(filteredTicket.createdAt)}
                    </p>
                    <ProgressDisplay 
                        progress={filteredTicket.progress}
                        />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay 
                        status={filteredTicket.status}
                        />
                </div>
            </div>
        </Link>
    </div>
  )
}

export default TicketCard
"use client"
import TicketCard from '@/components/TicketCard'
import { getTickets } from '@/lib/queries'
import React, { useEffect, useState } from 'react'


const DashBoard = () => {

  const [ allTickets, setAllTickets ] = useState()

  const uniqueCategories = [
    ...new Set(allTickets?.map(({category}) => category))
  ]

  useEffect(() => {
    const fetchingTicketData = async () => {
      const ticket = await getTickets()
      setAllTickets(() => {
        return ticket
      })
    }
    fetchingTicketData()
  }, [])

  return (
    <div
      className="p-5"
    >
      {
      allTickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div
          key={categoryIndex}
          className="mb-4"
        >
          <h2>{uniqueCategory}</h2>
          <div
            className="lg:grid grid-cols-2 xl:grid-cols-4"
          >
            {
              allTickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                <TicketCard 
                  id={_index}
                  key={_index}
                  filteredTicket={filteredTicket}
                />
              ))
            }
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default DashBoard
import TicketCard from '@/components/TicketCard'
import { getTickets } from '@/lib/queries'
import React from 'react'


const DashBoard = async () => {

  const tickets = await getTickets()

  const uniqueCategories = [
    ...new Set(tickets?.map(({category}) => category))
  ]

  return (
    <div
      className="p-5"
    >
      {
      tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div
          key={categoryIndex}
          className="mb-4"
        >
          <h2>{uniqueCategory}</h2>
          <div
            className="lg:grid grid-cols-2 xl:grid-cols-4"
          >
            {
              tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
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
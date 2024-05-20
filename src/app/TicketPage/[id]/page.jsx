import TicketForm from '@/components/TicketForm'
import { getTicketById } from '@/lib/queries'
import React from 'react'

const TicketPage = async ({ params }) => {

  const EDIT = params.id !== "new" ? true : false
  let updatedTicketData = {}

  if(EDIT) {
    updatedTicketData = await getTicketById(params.id)
    console.log(updatedTicketData, "hellasdasdo there")
  } else {
    console.log("New ticket")
    updatedTicketData= {
      _id: "new"
    }
  }

  return <TicketForm ticket={updatedTicketData} />
}

export default TicketPage
"use server"
import Ticket from "@/models/Ticket"

export const getTickets = async () => {
    const res = await Ticket.find()
    if(!res) {
        console.log("Something went wrong")
    } else {
        return res
    }
}

export const deleteTicket = async (id) => {
    const res = await Ticket.findByIdAndDelete(id)
    if(res) {
        console.log("hello from server", res)
    } else {
        console.log("hello no res")
    }
}

export const editTicket = async (id, formData) => {
    const res = await Ticket.findByIdAndUpdate(id, { ...formData})

}


export const getTicketById = async (id) => {
    const res = await Ticket.findById(id)
    return res
}
import Ticket from "@/models/Ticket"
import { NextResponse } from "next/server"

export async function DELETE(req, {params}){
    try {
        const { id } = params
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({ message: "Ticket deleted" }, { status: 200 })
    } catch(error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}
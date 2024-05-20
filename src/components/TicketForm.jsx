"use client"
import { editTicket } from "@/lib/queries";
import { useRouter } from "next/navigation";
import React,{  useState } from "react";

const TicketForm = ({ticket}) => {

    const EDIT = ticket._id !== "new" ? true : false

    const router = useRouter()

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    }


    const [ formData, setFormData ] = useState(startingTicketData)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value 
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(EDIT) {
            const res = await editTicket(ticket._id, formData)
            if(!res) {
                router.refresh()
                router.push("/")
            }
        } else {
            try {
                const res = await fetch("/api/Tickets", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    "content-type": "application/json"
                })
    
                if(!res.ok) {
                    throw new Error("Failed to create Ticket")
                } else {
                    router.refresh()
                    router.push("/")
                }
            } catch(error) {
                console.log(error, "Our Error")
            }
        }
    }

    if(EDIT) {
        startingTicketData["title"] = ticket.title
        startingTicketData["description"] = ticket.description
        startingTicketData["priority"] = ticket.priority
        startingTicketData["progress"] = ticket.progress
        startingTicketData["status"] = ticket.status
        startingTicketData["category"] = ticket.category
    }

    return(
        <div className="flex justify-center">
            <form 
                className="flex flex-col gap-3 w-1/2" 
                method="post"
                onSubmit={handleSubmit}
            >
                <h3>
                    {EDIT ? 'Edit Your Ticket' : 'Create Your Ticket'}
                </h3>
                <label>Title</label>
                <input 
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required
                    value={formData.title}  
                />
                <label>Description</label>
                <textarea 
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required
                    value={formData.description}  
                    rows='5'
                />
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="Hardware Problem">
                        Hardware Problem
                    </option>
                    <option value="Software Problem">
                        Software Problem
                    </option>
                    <option value="Project">
                        Project
                    </option>
                </select>
                <label>Priority</label>
                <div>
                    {
                        [1, 2, 3, 4, 5].map((item) => (
                            <div key={item}>
                                <label>{item}</label>
                                <input
                                    id={`priority-${item}`}
                                    name="priority" 
                                    type="radio"
                                    onChange={handleChange}
                                    value={item}
                                    checked={formData.priority == item} 
                                />
                            </div>
                        ))
                    }
                    <label>Progress</label>
                    <input 
                        type="range" 
                        id="progress" 
                        name="progress" 
                        value={formData.progress} 
                        min="0" 
                        max="100"
                        onChange={handleChange} 
                    />
                    <label>Status</label>
                    <select 
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        {
                            [
                                {
                                    value: "not started",
                                    name: "Not started"
                                },
                                {
                                    value: "started",
                                    name: "Started"
                                },
                                {
                                    value: "done",
                                    name: "Done"
                                }
                            ].map((item) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                    <input type="submit" className="btn" value={EDIT ? 'Edit Ticket' : 'Create Ticket'} />
                </div>
            </form>
        </div>
    )
}

export default TicketForm

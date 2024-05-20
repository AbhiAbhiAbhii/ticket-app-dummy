import { deleteTicket } from '@/lib/queries'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteBlock = ({id}) => {

  const router = useRouter()

  const handleDelete = async () => {
    const res = await fetch(`/api/Tickets/${id}`, {
      method: "DELETE"
    })

    if(res.ok) {
      router.refresh()
    } else {
      alert("Something went wong")
    }
  }

  // const handleDelete = async () => {
  //   await deleteTicket(id)
  // }

  return (
    <FontAwesomeIcon 
      icon={faX}
      onClick={handleDelete}
      className="text-red-400 hover:text-red-200 hover:cursor-pointer"
    />
  )
}

export default DeleteBlock
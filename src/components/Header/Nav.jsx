import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav = ({className}) => {

    let navLinks = [
        {
            text: 'home',
            icon: faHome,
            href: '/'
        },
        {
            text: 'tickets',
            icon: faTicket,
            href: '/TicketPage/new'
        },
    ]

  return (
    <nav
        className="flex justify-between bg-nav p-4"
    >
        <div className='flex items-center space-x-4'>
            {
                navLinks.map((navItem) => (
                    <Link 
                        key={navItem.text}
                        href={navItem.href}    
                    >
                        <FontAwesomeIcon 
                            icon={navItem.icon}
                            className="icon"
                        />
                    </Link>
                ))
            }
        </div>
        <div>
            <p className="text-default-text">
                abhilashsk1998@gmail.com
            </p>
        </div>
    </nav>
  )
}

export default Nav
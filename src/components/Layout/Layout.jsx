import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Header/Nav'
import React from 'react'

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
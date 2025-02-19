import React from 'react'


const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
  <div>AnnouncementBar</div>
        </div>
      
    )
    }

const Header = () => {
  return (
    <header>
      <AnnouncementBar />
        <h1>Header</h1>
    </header>
  )
}

export default Header
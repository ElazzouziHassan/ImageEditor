import MobileNavBar from '@/components/shared/MobileNavBar'
import SideBar from '@/components/shared/SideBar'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='root'>
      <SideBar/>
      <MobileNavBar/>
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
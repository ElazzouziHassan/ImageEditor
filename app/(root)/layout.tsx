import MobileNavBar from '@/components/shared/MobileNavBar'
import SideBar from '@/components/shared/SideBar'
import { Toaster } from '@/components/ui/toaster'
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
      <Toaster />
    </main>
  )
}

export default Layout
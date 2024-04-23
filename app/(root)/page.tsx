import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>
      <p>Home</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home
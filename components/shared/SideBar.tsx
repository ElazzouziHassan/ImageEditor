import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideBar() {
  return (
    <aside className='side-bar'>
      <div className="flex size-full flex-col gap-4">
        <Link href='/' className="side-bar-logo">
          <Image src="/assets/images/logo.png" alt='Smart Canvas Logo' width={180} height={28} />
        </Link>
      </div>
    </aside>
  )
}

export default SideBar
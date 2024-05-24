import {Collection} from '@/components/shared/Collection'
import Search from '@/components/shared/Search'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Home = async ({ searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})
  return (
    <Fragment>
      {/* uncomment this section for header */}
      {/* <section className='home'>
        <h1 className='home-heading'>
          Smart Canvas
        </h1>
        <Search />
        <span className='mb-5 text-white'>High-quality photos, AI Images, Next Generation Of Image Editors</span>
      </section> */}
      <section>
        <ul className="flex-center w-full gap-20">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-row gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-purple">{link.label}</p>
              </Link>
            ))}
          </ul>
      </section>
      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </Fragment>
  )
}

export default Home
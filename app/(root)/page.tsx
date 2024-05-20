import Collection from '@/components/shared/Collection'
import React, { Fragment } from 'react'

const Home = async () => {

  return (
    <Fragment>
      <section>
        <h1 >
          Home page
        </h1>
      </section>
      <section className="sm:mt-12">
        <Collection/>
      </section>
    </Fragment>
  )
}

export default Home
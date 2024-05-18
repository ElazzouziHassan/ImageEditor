import EditingForm from '@/components/shared/EditingForm';
import Header from '@/components/shared/Header'
import { editTypes } from '@/constants';
import React from 'react'

const AddEditsType = async ({ params: { type } }: SearchParamProps) => {

  // const { userId } = auth();
  const edit = editTypes[type];

  // if(!userId) redirect('/sign-in')

  // const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={edit.title}
        subtitle={edit.subTitle}
      />
    
      <section className="mt-10">
        <EditingForm/>
      </section>
    </>
  )
}

export default AddEditsType
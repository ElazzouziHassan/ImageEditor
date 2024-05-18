import EditingForm from '@/components/shared/EditingForm';
import Header from '@/components/shared/Header'
import { editTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const AddEditsType = async ({ params: { type } }: SearchParamProps) => {

  const { userId } = auth();
  const edit = editTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={edit.title}
        subtitle={edit.subTitle}
      />
    
      <section className="mt-10">
        <EditingForm
          action='Add'
          userId={user._id}
          type={edit.type as EditingTypeKey}
          creditBalance={user.creditBalance}

        />
      </section>
    </>
  )
}

export default AddEditsType
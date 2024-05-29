import EditingForm from '@/components/shared/EditingForm';
import Header from '@/components/shared/Header'
import { editTypes } from '@/constants';
import { getImageById } from '@/lib/actions/image.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const UpdatedEdits = async ({ params: { id } }: SearchParamProps) => {

  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  const edit = editTypes[image.editingType as EditingTypeKey];

  return (
    <>
      <Header title={edit.title} subtitle={edit.subTitle} />

      <section className="mt-10">
        <EditingForm
          action="Update"
          userId={user._id}
          type={image.editingType as EditingTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  )
}

export default UpdatedEdits
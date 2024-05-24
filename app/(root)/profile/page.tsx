import { getUserImages } from '@/lib/actions/image.actions';
import { getUserById } from '@/lib/actions/user.actions';
import React from 'react'
import Image from "next/image";
import { redirect } from "next/navigation";
import Header from '@/components/shared/Header';
import { Collection } from '@/components/shared/Collection';
import { auth } from '@clerk/nextjs/server';

const Profile = async ({ searchParams }: SearchParamProps) => {

  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id }); 
  
  return (
    <>
     <section className="mt-8 md:mt-14">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  )
}

export default Profile
// 'use server'

import { getAllUserSuppliers } from '@/lib/api'
import MainPageSkeleton from '@/components/MainPageSkeleton';

export default async function Page() {
  //TODO: create and display error component
  const { data } = await getAllUserSuppliers();

  return (
    <MainPageSkeleton data={data} />
  )
}
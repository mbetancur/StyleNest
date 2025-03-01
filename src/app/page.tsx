'use server'

import SupplierContainer from '@/components/SupplierContainer'
import { JSX } from 'react'
import { getAllUserSuppliers } from '@/lib/api'
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'

export default async function Page(): Promise<JSX.Element> {
  const { data, error } = await getAllUserSuppliers();

  const displaySupplyList = (supplyList: string): JSX.Element[] => {
    const supplyListArray = supplyList.split(',')
    return supplyListArray.map((supply, index) => (
      <li key={index}>{supplyListMatcher(supply)}</li>
    ))
  }

  const x = [{
    img: "🍕",
    text: "Pizzas"
  },
  {
    img: "🐈",
    text: "Gato"
  },
  {
    img: "🐕",
    text: "Perro"
  },
  ]

  return (
    <>
      <SupplierContainer data={x} />
      {data?.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <ul>{displaySupplyList(user.supplyList)}</ul>
          <p>{user.description}</p>
          <img src={user.imageUrl} alt={`${user.name}'s profile`} />
        </div>
      ))}
    </>
  )
}
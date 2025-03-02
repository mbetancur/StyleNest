'use server'

import SupplierContainer from '@/components/SupplierContainer'
import { createClient } from '@/lib/db/client'
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'
import { JSX } from 'react'
import Nav from '@/components/Nav'
import ProfileContainer from '@/components/ProfileContainer'

export default async function Page() {
  //TODO move to api?
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('userSupplier')
    .select('*')
    .limit(1)
  // TODO: control errors properly in here
  if (error) {
    console.error('Error fetching data:', error)
  } else {
    console.log('Fetched data:', data)
  }

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
      <Nav/> 
      <SupplierContainer data={x}/>  
      { 
      <ProfileContainer data={ data ? data : [] }/>
      }
      
      {/* {data?.map((user) => {
      
      return (
      
        <div key={user.id}>
          <h1>{user.name}</h1>
          <ul>{displaySupplyList(user.supplyList)}</ul>
          <img src={user.imageUrl} alt={`${user.name}'s profile`} />
        </div>
      )})} */}
    </>
  )
}
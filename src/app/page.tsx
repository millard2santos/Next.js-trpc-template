import Image from 'next/image'
import { serverClient } from '../trpc/serverClient'

export default async function Home() {

  const result = await serverClient.hello()
  console.log(result);
  
  return (
   <></>
  )
}

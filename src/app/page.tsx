'use client'
import { serverClient } from '../trpc/serverClient'
import { useStore } from '../context/useStore';

export default function Home() {


  return (
   <>
 
   <BearCounter />
   <Controls />
   </>
  )
}

function BearCounter() {
  const {bears} = useStore()
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const {increasePopulation} = useStore()
  return <button onClick={increasePopulation}>one up</button>
}

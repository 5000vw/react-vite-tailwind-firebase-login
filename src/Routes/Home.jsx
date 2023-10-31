import React from 'react'
import { signOut,getAuth } from 'firebase/auth'
export function Home() {
  const auth =getAuth()
  async function handleSignOut(){
    try{
      await signOut(auth)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <div>
    <button onClick={()=>{handleSignOut()}}>Sign Out</button></div>
  )
}


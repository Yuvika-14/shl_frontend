import React from 'react'



import Query from "./comp/Query"; // <-- use ./comp instead of ../comp

import {UserButton} from '@clerk/nextjs'
const Dashboard = () => {
  return (
    <div>
       
       <Query /> 

    </div>
  )
}

export default Dashboard

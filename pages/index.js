import React from 'react'
import {useRouter} from 'next/router'

const InexPage = () => {
  const router  =useRouter()
  React.useEffect(() => {
    router.push('/ikhtibar')
  
   
  }, [])
  
  return (
    <div></div>
  )
}

export default InexPage
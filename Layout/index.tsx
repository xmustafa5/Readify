import React from 'react'
import SidBar from './Sidbar'
import Footer from './Footer'

export default function index({children}:any) {
  return (
<>
<SidBar/>
{children}
<Footer/>
</>
    )
}

import React from 'react'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { Store } from './App'


export function CartInfo(){
   const str = useContext(Store)
   var cartRange = str.cartData
  
    return(
        <div>
 
        </div>
    )
}

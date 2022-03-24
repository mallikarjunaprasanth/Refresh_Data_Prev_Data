import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Main() {
  
let navigate = useNavigate();
  return (
    <div>

<h4>  hello world</h4>
      



        <button onClick={()=> navigate("/")} >Back</button>
    </div>
  )
}

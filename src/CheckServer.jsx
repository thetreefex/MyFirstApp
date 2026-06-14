import { useState,useEffect } from "react"
function CheckServer() {
  const [message,setMessage] = useState("Loading")
  useEffect(() => {
    const req = async() => {
      const res = await fetch("http://localhost:3000/")
      const data = await res.json()
      setMessage(data.message)}
    req()
  },[])
  return(
    <h2>{message}</h2>
  )
}
export default CheckServer
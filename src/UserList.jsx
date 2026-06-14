function checkServer() {
  const data = null
  const req = async() => {
    const res = await fetch("http://localhost:3000/")
    data = await res.json
  }
  req()
  return(
    <h2>{data}</h2>
  )
}
export default checkServer
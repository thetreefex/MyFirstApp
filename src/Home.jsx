import { Routes,Route, Link } from "react-router-dom"
import "./All.css"
import About from "./About"
import Users from "./Users"
import CheckServer from "./CheckServer"
function Home() {
    return (
        <div>
            <h1>It's a home</h1>
        </div>
    )
}
function App() {
    return (
        <div >
            <nav>
                <Link id="Link" to={"/"}>Main</Link>
                <Link id="Link" to={"/About"}>About</Link>
                <Link id="Link" to={"/Users"}>Users</Link>
                <Link id="Link" to={"/CheckServer"}>Search User</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Users" element={<Users/>}/>
                <Route path="CheckServer" element={<CheckServer/>}/>
            </Routes>
        </div>
    )
}
export default App
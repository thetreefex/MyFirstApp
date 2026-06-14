import { Routes,Route, Link } from "react-router-dom"
import "./All.css"
import UserList from "./UserList"
import About from "./About"
import Users from "./Users"
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
                <Link id="Link" to={"/UserList"}>Search User</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Users" element={<Users/>}/>
                <Route path="UserList" element={<UserList/>}/>
            </Routes>
        </div>
    )
}
export default App
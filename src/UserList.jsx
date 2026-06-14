import { useState, useEffect } from "react";
function UserCard({ name, email, city }) {
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{city}</p>
        </div>
    );
}
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const DataLoad = async() =>{
          const res = await fetch("https://jsonplaceholder.typicode.com/users")
          const data = await res.json()
          setUsers(data)
          setLoading(false)
        }
        DataLoad()
    }, []);

    // фильтрация
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    )
    if (loading) return(
      <div>
        <h1>git test</h1>
      </div>
    )

    return (
        <div>
          <input type="search" value={search} onChange={e => setSearch(e.target.value)}/>
          {filtered.map(user => {
            return(<UserCard
            id={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
            />)
          })}
        </div>
    );
}

export default UserList
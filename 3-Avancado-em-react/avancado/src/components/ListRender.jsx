import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Karina", "Erik", "Pereira"])
    const [users, setUsers] = useState([
        {id: 1, name: "Erik", age:20},
        {id:2, name: "Karina", age:28}
    ])
 
    const DeleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3)

        setUsers((prevUsers)=>{

            return prevUsers.filter((user)=> randomNumber !== user.id)            
        })
        console.log(randomNumber)
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((users) => (
                <li key={users.id}>
                    {users.name} - {users.age}
                    </li>
            ))}
        </ul>
        <button onClick={DeleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender
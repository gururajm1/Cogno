import React from 'react'

interface User{
  id: number;
  name: string;
}

const page = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(use => <li key={use.id}>{use.name}</li>)}
    </div>
  )
}

export default page
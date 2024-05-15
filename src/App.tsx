import { useEffect, useState } from "react";
import { Table } from "./components/Table/Table";
import { ColumnsType } from "./components/Table/types/Table.types";

interface User {
  id: string;
  name: string;
  email: string;
}

const columns: ColumnsType<User> = [
  {key: 'id', title: 'Number'},
  {key: 'name', title: 'Name'},
  {key: 'email', title: 'Email'},
  {
    key: 'actions', 
    title: 'Actions', 
    render: (record) => {
      return (
        <button onClick={() => console.log(record, 'record')}>
          action button
        </button>
      )
  }},
]

function App() {

  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error('Failed to fetch users...')
  }  

  setUsers(await response.json())
}

  return (
    <>
      <Table<User> columns={columns} data={users} />
    </>
  )
}

export default App

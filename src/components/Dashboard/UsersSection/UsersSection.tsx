import { useState } from "react";
import UserTable from "./UsersTable";
import UserSearch from "./SearchForUser";



export default function UsersSection() {
const [searchQuery, setSearchQuery] = useState("");
 const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@email.com", status: "Active" as const },
    { id: 2, name: "Bob", email: "bob@email.com", status: "Active" as const },
    { id: 3, name: "Charlie", email: "charlie@email.com", status: "Blocked" as const },
  ]);

   const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeactivate = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "Deactivated" } : u
      )
    );
  };

  const handleBlock = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "Blocked" } : u
      )
    );
  };


  return (
    <div className="flex flex-col gap-3 mx-3 my-5">
        <h1 className="text-3xl font-bold">Users</h1>
        <UserTable
        users={users}
        onDeactivate={handleDeactivate}
        onBlock={handleBlock}
        />
    </div>
  );
}

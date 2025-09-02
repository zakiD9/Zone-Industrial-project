import UserTable from "./UsersTable";

export default function UsersSection() {

  return (
    <div className="flex flex-col gap-3 mx-3 my-5">
      <h1 className="text-3xl font-bold">Users</h1>
      <UserTable
      />
    </div>
  );
}

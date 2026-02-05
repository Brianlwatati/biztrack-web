import { User } from "@/types/user";

export default async function UserTableOne({ users }: { users: User[] }) {
  return (
    <table className=" table w-full border-collapse border border-gray-400 mt-4">
      <thead className="font-medium uppercase text-gray-400">
        <tr>
          <th className=" text-left border text-sm border-gray-300 p-3">ID</th>
          <th className=" text-left border text-sm border-gray-300 p-3">
            Name
          </th>
          <th className=" text-left border text-sm border-gray-300 p-3">
            Email
          </th>
          {/* <th>Created At</th> */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="text-sm">
            <td className="border text-sm border-gray-300 p-3">{user.id}</td>
            <td className="border text-sm border-gray-300 p-3">{user.name}</td>
            <td className="border text-sm border-gray-300 p-3">{user.email}</td>
            {/* <td>{user.createdAt}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

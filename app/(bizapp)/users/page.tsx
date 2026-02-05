import UserTableOne from "@/components/customtables/usertableone";
import { User } from "@/types/user";

export default async function UsersPage() {
  const data = await fetch("http://127.0.0.1:5000/user", {
    cache: "no-store",
  });
  const users: User[] = await data.json();
  return (
    <div className="p-10 rounded-3xl bg-white">
      <h1 className="text-xl font-semibold">Users List</h1>
      <UserTableOne users={users} />
    </div>
  );
}

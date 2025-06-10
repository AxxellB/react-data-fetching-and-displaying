import User from "../types/User";

interface UserListProps {
  users: User[];
  loading: boolean
  error: string | null;
}

const UserList: React.FC<UserListProps> = ({ users, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users...</div>;
  }

  if(users.length === 0){
    return <div>No users found</div>
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

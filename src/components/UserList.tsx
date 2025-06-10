import User from "../types/User";
import UserCard from "./UserCard";

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
    <div className="user-list-container">
      <h1 className="section-title">User List</h1>
      <div className="user-cards-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

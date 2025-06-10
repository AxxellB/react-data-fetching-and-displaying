import React from 'react';
import User from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>

      <div className="user-info">
        <p>
          <span className="info-label">Username:</span> {user.username}
        </p>
        <p>
          <span className="info-label">Email:</span> {user.email}
        </p>
        <p>
          <span className="info-label">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="info-label">Website:</span>{' '}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="user-website-link"
          >
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
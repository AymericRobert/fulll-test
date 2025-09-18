import type { GithubUserItem } from "../types";
import "./styles/UserCard.css";

interface UserCardProps {
  user: GithubUserItem;
  checked: boolean;
  onToggle: () => void;
  editMode: boolean;
}

const UserCard = ({ user, checked, onToggle, editMode }: UserCardProps) => {
  console.log("EDIT MODE IN COMPO : ", editMode);
  return (
    <div className="user-card">
      <label style={{cursor: editMode ? "pointer" : "auto"}}>
        {editMode && (
          <div>
            <input
              type="checkbox"
              className="checkbox-input"
              checked={checked}
              onChange={onToggle}
            />
            <span className="custom-checkbox"></span>
          </div>
        )}

        <div className="top-section">
          <img src={user.avatar_url} alt={user.login} className="image-user" />
        </div>

        <h4>{user.id}</h4>
        <h4>{user.login}</h4>
      </label>

      <a href={user.html_url} target="_blank" rel="noreferrer">
        View profile
      </a>
    </div>
  );
};

export default UserCard;

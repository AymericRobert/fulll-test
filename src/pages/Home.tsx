"use client";
import { useReducer, useEffect, useState } from "react";
import { usersReducer } from "../state/users/reducer";
import type { UsersState } from "../types";
import { getUser } from "../services/githubApi";
import SearchInput from "../components/SearchInput";
import UserCard from "../components/UserCard";
import ActionsBar from "../components/ActionBar";
import "./Home.css";

const initialState: UsersState = {
  query: "",
  users: [],
  selectedIds: new Set(),
};

export default function Home() {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.query.trim()) {
      dispatch({ type: "setUsers", users: [] });
      return;
    }

    setLoading(true);

    const timeout = setTimeout(async () => {
      try {
        const result = await getUser(state.query);
        dispatch({ type: "setUsers", users: result.items });
        setError("");
        if (result.items.length === 0) {
          setError("Users not found");
        }
      } catch (err: any) {
        dispatch({ type: "setUsers", users: [] });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [state.query]);

  const isAllSelected =
    state.users.length > 0 && state.users.length === state.selectedIds.size;

  console.log(state);
  console.log("Edit mode : ", editMode);

  return (
    <div className="home-container">
      <SearchInput
        query={state.query}
        onQueryChange={(value) => dispatch({ type: "setQuery", query: value })}
      />

      {loading && state.query !== "" && (
        <div className="loader" role="status" />
      )}

      {state.users.length > 0 && (
        <div>
        <div className="edit-mode">
  <span>Edit mode</span>
  <label className="edit-checkbox">
    <input
      type="checkbox"
      checked={editMode}
      onChange={(e) => setEditMode(e.target.checked)}
      aria-label="Edit mode"
    />
    <span className="slider round"></span>
  </label>
</div>
          {editMode && (
            <ActionsBar
              totalSelected={state.selectedIds.size}
              isAllSelected={isAllSelected}
              onToggleAll={() =>
                isAllSelected
                  ? dispatch({ type: "deselectAll" })
                  : dispatch({ type: "selectAll" })
              }
              onDelete={() => dispatch({ type: "deleteSelected" })}
              onDuplicate={() => dispatch({ type: "duplicateSelected" })}
            />
          )}

          <div className="users-section">
            {state.users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                checked={state.selectedIds.has(user.id)}
                onToggle={() => dispatch({ type: "toggle", id: user.id })}
                editMode={editMode}
              />
            ))}
          </div>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
// src/state/users/reducer.ts
import type { UsersState, UsersAction } from "../../types";

export const usersReducer = (state: UsersState, action: UsersAction): UsersState => {
  switch (action.type) {
    case "setQuery":
        return { ...state, query: action.query, users: [], selectedIds: new Set() };

    case "setUsers":
      return { ...state, users: action.users, selectedIds: new Set() };

    case "toggle": {
      const selected = new Set(state.selectedIds);
      if (selected.has(action.id)) selected.delete(action.id);
      else selected.add(action.id);
      return { ...state, selectedIds: selected };
    }

    case "selectAll": {
      const allIds = state.users.map((u) => u.id);
      return { ...state, selectedIds: new Set(allIds) };
    }

    case "deselectAll":
      return { ...state, selectedIds: new Set() };

    case "deleteSelected": {
      const filtered = state.users.filter((u) => !state.selectedIds.has(u.id));
      return { ...state, users: filtered, selectedIds: new Set() };
    }

    case "duplicateSelected": {
      const newUsers = [...state.users];

      state.users.forEach((u, index) => {
        if (state.selectedIds.has(u.id)) {
          const baseLogin = u.login.replace(/\s\(\d+\)$/, "");

          const existingCopies = state.users.filter((x) =>
            x.login.startsWith(baseLogin)
          );

          let copyNumber = 1;
          let newLogin = `${baseLogin} (${copyNumber})`;

          while (existingCopies.some((x) => x.login === newLogin)) {
            copyNumber++;
            newLogin = `${baseLogin} (${copyNumber})`;
          }

          const duplicated = {
            ...u,
            id: Date.now() + Math.floor(Math.random() * 1000), 
            login: newLogin,
          };

          newUsers.splice(index + 1, 0, duplicated);
        }
      });

      return { ...state, users: newUsers, selectedIds: new Set() };
    }


    default:
      return state;
  }
};
// src/types.ts
export interface GithubUserItem {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  // ajoute d'autres champs si besoin
}

export interface UsersState {
  query: string;
  users: GithubUserItem[];
  selectedIds: Set<number>;
}

export type UsersAction =
  | { type: "setQuery"; query: string }
  | { type: "setUsers"; users: GithubUserItem[] }
  | { type: "toggle"; id: number }
  | { type: "selectAll" }
  | { type: "deselectAll" }
  | { type: "deleteSelected" }
  | { type: "duplicateSelected" };


  export interface ActionsBarProps {
    totalSelected: number;
    isAllSelected: boolean;
    onToggleAll: () => void;
    onDelete: () => void;
    onDuplicate: () => void;
  }
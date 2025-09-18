"use client";
import "./styles/SearchInput.css";

interface SearchInputProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function SearchInput({ query, onQueryChange }: SearchInputProps) {
  return (
    <input
      name="SearchInput"
      type="text"
      placeholder="Search Input"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}
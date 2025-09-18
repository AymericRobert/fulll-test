import type { ActionsBarProps } from "../types";
import "./styles/ActionBar.css";

const ActionsBar = ({
  totalSelected,
  isAllSelected,
  onToggleAll,
  onDelete,
  onDuplicate,
}: ActionsBarProps) => (
  <div className="actions-bar">
    <div className="selected-section">
      <input
        name="checkbox-select-all"
        type="checkbox"
        className="selectAll-checkbox"
        checked={isAllSelected}
        onChange={onToggleAll}
        aria-label="Select all"
      />
      <span>{totalSelected} elements selected</span>
    </div>
    <div className="delete-duplicate-section">
      <svg
        onClick={onDuplicate}
        fill="#bbbdbf"
        width="24px"
        height="24px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        aria-label="Duplicate selected"
        role="button"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth={4.608}
        />

        <g id="SVGRepo_iconCarrier">
          <path
            d="M47.81 91.725c0-8.328 6.539-15.315 15.568-15.33 9.03-.016 14.863.015 14.863.015s-.388-8.9-.388-15.978c0-7.08 6.227-14.165 15.262-14.165s92.802-.26 101.297.37c8.495.63 15.256 5.973 15.256 14.567 0 8.594-.054 93.807-.054 101.7 0 7.892-7.08 15.063-15.858 15.162-8.778.1-14.727-.1-14.727-.1s.323 9.97.323 16.094c0 6.123-7.12 15.016-15.474 15.016s-93.117.542-101.205.542c-8.088 0-15.552-7.116-15.207-15.987.345-8.871.345-93.58.345-101.906zm46.06-28.487l-.068 98.164c0 1.096.894 1.99 1.999 1.984l95.555-.51a2.007 2.007 0 0 0 1.998-2.01l-.064-97.283a2.01 2.01 0 0 0-2.01-2.007l-95.4-.326a1.99 1.99 0 0 0-2.01 1.988zM63.268 95.795l.916 96.246a2.007 2.007 0 0 0 2.02 1.982l94.125-.715a3.976 3.976 0 0 0 3.953-4.026l-.137-11.137s-62.877.578-71.054.578-15.438-7.74-15.438-16.45c0-8.71.588-68.7.588-68.7.01-1.1-.874-1.99-1.976-1.975l-9.027.13a4.025 4.025 0 0 0-3.97 4.067z"
            fillRule="evenodd"
          />
        </g>
      </svg>

      <svg
        onClick={onDelete}
        width="24px"
        height="24px"
        viewBox="0 0 1024 1024"
        fill="#bbbdbf"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", marginLeft: "8px" }}
        aria-label="Delete selected"
        role="button"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <path
            d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z"
            fill=""
          />
          <path
            d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z"
            fill=""
          />
        </g>
      </svg>
    </div>
  </div>
);

export default ActionsBar;

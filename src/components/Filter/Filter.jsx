import React from 'react';
// import { nanoid } from 'nanoid';
// const filterInputId = nanoid();

export const Filter = ({ value, onFilterChange }) => (
  <label>
    Filter contacts by name
    <input type="text" value={value} onChange={onFilterChange} />
  </label>
);

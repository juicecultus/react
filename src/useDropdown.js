import React, { useState } from 'react';

const UseDropdown = (label, defaultState, options) => {
  const [state, setstate] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => setstate(event.target.value)}
        onBlur={(event) => setstate(event.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setstate];
};

export default UseDropdown;

import React, { useState, FunctionComponent, Dispatch } from 'react';

const UseDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const [state, setstate] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown: FunctionComponent = () => (
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

  return [state, Dropdown, setstate] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default UseDropdown;

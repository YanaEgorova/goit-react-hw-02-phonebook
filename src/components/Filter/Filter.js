import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <>
      <h3> Find contacts by me </h3>{' '}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>{' '}
    </>
  );
}

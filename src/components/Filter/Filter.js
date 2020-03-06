import React from 'react';

export default function Filter({ contacts, value, onChange }) {
    return (
        <>
            {contacts.length > 1 && (
                <>
                    <h3>Find contacts by me</h3>
                    <input
                        type="text"
                        value={value}
                        onChange={e => onChange(e.target.value)}
                    ></input>
                </>
            )}
        </>
    );
}

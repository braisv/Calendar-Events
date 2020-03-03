import React from 'react';


const TextInput = ({ state, setState, type, field }) => {

    return (
        <div>
            <label>{field}: </label><input type={type} onChange={(e) => setState(e.target.value)} value={state} />
        </div>
    )
}

export default TextInput
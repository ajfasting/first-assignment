import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>This is a paragraph</p>
            <p>This is a line for {props.userName}</p>
        </div>
    )
}

export default userOutput;
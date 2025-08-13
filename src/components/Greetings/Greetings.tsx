import React from 'react';

function Greetings({ name }: { name: string }) {
    return (
        <div>
            <span> Hi, {name}! </span>
        </div>
    )
}

export default Greetings;
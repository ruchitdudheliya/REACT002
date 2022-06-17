import React from 'react';
function Demo(props) {
    return ( 
        <div>
        <h1 className='xyz'>Hello {props.name} {props.last}</h1>{props.children}
        </div>
     );
}

export default Demo;
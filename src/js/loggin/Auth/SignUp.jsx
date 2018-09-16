import React from 'react';

const SingUp = () => {
    return (
        <div>
            <h1>Sign-up</h1>
            <form action="">
                <input type="text" value={props.username} placeholder="Username"/>
                <input type="password" value={props.password} placeholder="Password"/>
            </form>
        </div>
    );
};

export default SingUp;
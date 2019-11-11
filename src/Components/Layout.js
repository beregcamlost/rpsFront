import React from 'react';
import Aux from '../hoc/Aux';


const layout = (props) => (
    <Aux>
        <div className="App">
            <div className="home">
                <img src="/logo512.png" className="App-logo rotating" alt="logo" />
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;
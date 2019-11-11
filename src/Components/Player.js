import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';


class Player extends Component {
    clicked = (param) => {
        console.log(param);
    } 
    render() {
        return (
            <form>
                <Input
                    variant="outlined"
                    size="medium"
                    color="primary"
                    placeholder="Player Name"
                />
                <Button
                    variant="outlined"
                    size="medium"
                    color="primary" 
                    onClick={this.clicked.bind(this, 'i clicked right here')}
                >
                    Add
                </Button>
            </form>
        );
    }
};

export default Player;

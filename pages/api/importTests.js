import React, { Component } from 'react';
import Components from './ComponentIndex';

class Main extends Component {
    render () {
        var type = 'Component1'; // example variable - will change from user input
        const ComponentToRender = Components[type];
        return <ComponentToRender/>
    }
}

export default Main
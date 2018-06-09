import React from 'react';
import { render } from 'react-dom';

const Hello = props => <div>Hello {props.name}!</div>;

render(<Hello name="World" />, document.getElementById('root-1'));

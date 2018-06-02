import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import {FormGroup,ButtonToolbar} from 'react-bootstrap';
import Form from 'react-bootstrap/lib/Form';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';



export default class TTest extends React.Component {
        render() {
            return(
        <Form inline>
            <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Jane Doe"/>
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>
                {' '}
                <FormControl type="email" placeholder="jane.doe@example.com"/>
            </FormGroup>
            {' '}
            <Button type="submit">
                Send invitation
            </Button>
        </Form>
    );
}
}

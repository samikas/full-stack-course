import React from 'react';
import {Form,Button, Label} from 'semantic-ui-react';

export default class ContactForm extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			firstName:"",
			lastName:"",
			address:"",
			email:"",
			phone:""
		}
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value
        this.setState(state);
    }
    onSubmit = (event) => {
        event.preventDefault();
        let contact = {
            id:0,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.addToList(contact);
        this.setState ({
			firstName:"",
			lastName:"",
			address:"",
			email:"",
			phone:""
		})
    }
    
    render() {
		return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Label htmlFor="firstName">First name:</Label>
                    <input type="text"
                        name="firstName"
                        onChange={this.onChange}
                        value={this.state.firstName}/>
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="lastName">Last name:</Label>
                    <input type="text" 
                        name="lastName" 
                        onChange={this.onChange}
                        value={this.state.lastName}/>
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="address">Address:</Label>
                    <input type="text" 
                        name="address" 
                        onChange={this.onChange}
                        value={this.state.address}/>
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="email">Email:</Label>
                    <input type="text" 
                        name="email" 
                        onChange={this.onChange}
                        value={this.state.email}/>
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="phone">Phone:</Label>
                    <input type="tel" 
                        name="phone" 
                        onChange={this.onChange}
                        value={this.state.phone}/>
                </Form.Field>
                <br/>
                <Button type="submit">Add</Button>
            </Form>
            )
    }
}

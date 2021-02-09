import React , { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        //The state object stores the property values that belongs to the component
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            mobile: ''
        }
    }

    //onchange attribute fires the moment when the value of the element is changed
    onChangeFirstName = e => {
        this.setState({ first_name: e.target.value });
    }

    onChangeLastName = e => {
        this.setState({ last_name: e.target.value });
    }

    onChangeEmail = e => {
        this.setState({ email: e.target.value });
    }
    onChangeMobile = e => {
        this.setState({ mobile: e.target.value });
    }

    //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    onSubmit = e => {
        e.preventDefault();

        console.log('Form submitteed:');
        console.log(`First Name: ${this.state.first_name}`);
        console.log(`Last Name: ${this.state.last_name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Mobile: ${this.state.mobile}`);

        const newContact = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            mobile: this.state.mobile
        }

        axios.post('http://localhost:4000/contacts/add', newContact)//use axios.post to post the HTTP request
            .then( res => console.log(res.data));
        
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            mobile: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Contact</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />

                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                                />           
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />           
                    </div>
                    <div className="form-group">
                        <label>Mobile: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.mobile}
                                onChange={this.onChangeMobile}
                                />           
                    </div>
                       
                    <div className="form-group">
                        <input type="submit" value="Create Contact" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
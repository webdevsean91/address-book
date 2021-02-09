import React , { Component } from 'react';
import axios from 'axios';

export default class EditContact extends Component {

    constructor(props) {
        super(props);
        this.state = { //The state object is stores the property values that belongs to the component
            first_name: '',
            last_name: '',
            email: '',
            mobile: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts/' + this.props.match.params.id)
            .then( res => {
                this.setState({
                   first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    email: res.data.email,
                    mobile: res.data.mobile
                })
            })
            .catch( err => console.log(err));
    }

    //onchange attribute fires the moment when the value of the element is changed
    onChangeFirstName = (e) => {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName = (e) => {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangeMobile = (e) => {
        this.setState({
            mobile: e.target.value
        });
    }
    
    //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
           first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            mobile: this.state.mobile
        };
        axios.post('http://localhost:4000/contacts/update/' + this.props.match.params.id, obj)
            .then( res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Contacts</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type="int" 
                                className="form-control"
                                value={this.state.mobile}
                                onChange={this.onChangeMobile}
                                />
                    </div>
                        <br />
                        <div className="editbutton">
                            <input type="submit" value="Update Contact" className="editbutton2" />
                        </div>
                </form>
            </div>
        )
    }
}
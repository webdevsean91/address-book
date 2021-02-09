import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const Contact = props => (
    <tr>
        {/* object argument with data and returns a React element. */}
        <td className = { props.contact.contact_completed ? 'completed' : ''}>{props.contact.first_name}</td>
        <td className = { props.contact.contact_completed ? 'completed' : ''}>{props.contact.last_name}</td>
        <td className = { props.contact.contact_completed ? 'completed' : ''}>{props.contact.email}</td>
        <td className = { props.contact.contact_completed ? 'completed' : ''}>{props.contact.mobile}</td>
        <td>
            <Link to={"/edit/" + props.contact._id}>Edit</Link>
        </td>
    </tr>
)


export default class ContactsList extends Component {

    // calling the React component constructor passing in props as the argument
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }
    

    componentDidMount() { // here i use axios.get to request HTTP request from my API
        axios.get('http://localhost:4000/contacts')
            .then( res => {
                this.setState({
                    contacts: res.data
                })
            })
            .catch( err => console.log(err));
    }

    componentDidUpdate() { //here i use axios to update the changes 
        axios.get('http://localhost:4000/contacts')
            .then( res => {
                this.setState({
                    contacts: res.data
                })
            })
            .catch( err => console.log(err));
    }

    contactList = () => this.state.contacts.map( //using state to map over contacts and use key to identify
        (contact, index) => <Contact contact={contact} key={index} />
    )
    

    render() {        
        return (
            <div>
                <h3 className='App-header'>Contacts List</h3>
                <table className="table" style={{ marginTop: 20}}>
                    <thead className='tr1'>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody className="table">
                        { this.contactList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
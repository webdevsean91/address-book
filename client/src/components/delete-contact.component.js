// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class DeleteContact extends Component {

//   constructor(props) {
//         super(props);
//         this.delete = this.delete.bind(this);
//     }
//     delete() {  // get the axios request to delete an obj through the unique id
//         axios.get('http://localhost:4000/contact/delete/'+this.props.obj._id)
//             .then(console.log('Deleted'))
//             .catch(err => console.log(err))
//     }
//   render() {
//     return (
//         <tr>
//           <td>
//             {this.props.obj.first_name}
//           </td>
//           <td>
//             {this.props.obj.last_name}
//           </td>
//           <td>
//             {this.props.obj.email}
//           </td>
//           <td>
//             {this.props.obj.mobile}
//           </td>
//           <td>
//             <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
//           </td>
//           <td>
//             <button onClick={this.delete} className="btn btn-danger">Delete</button> // then clicking on the Delete button this will fire the onClick function which is l;inked to the super(props)
//           </td>
//         </tr>
//     );
//   }
// }

// export default DeleteContact;
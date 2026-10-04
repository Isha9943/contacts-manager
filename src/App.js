import {connect} from 'react-redux'
import './App.css';
import ContactView from './ContactView';
import {useState} from 'react'



function App(props) {
  let [email, setEmail] = useState('')
  let [name, setName] = useState('')
  function addContact() {
    let contact = {
      email, name
    }
    props.addContact(contact)
  }

  

  

  
  return (
    <div className="App">
      <button onClick={props.clear}>Clear Contacts</button>
      <form>
        <input type="email"  onChange={e => setEmail(e.target.value)}  /> <br />
        <input type="text"  onChange={e => setName(e.target.value)}  /> <br />
        <button type="button" onClick={e => { addContact() }}>Add Contact</button>
      </form>
      {
        props.contact_list.map(contact => <ContactView key={contact.email} contact={contact} deleteEvent={props.deleteContact} />)
      }
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state) {
  return {
    contact_list: state.contacts,
    user_avatar: state.profile.avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // define your dispatch actions here
    addContact: (contact) => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    deleteContact: (email) => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clear: () => dispatch({ type: 'CLEAR_CONTACTS' })
  };
}


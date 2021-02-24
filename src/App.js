import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
    const [contactList, setContactList] = useState(contacts.slice(0, 5));

    const addContact = () => {
        let random =
            contacts[Math.floor(Math.random() * (contacts.length - 4) + 5)];
        setContactList(() => [...contactList, random]);
    };
    const sortByName = () => {
        let sortedId = contactList.sort((a, b) => a.name.localeCompare(b.name));
        setContactList(() => [...sortedId]);
    };

    const sortByPopularity = () => {
        let sortedPopularity = contactList.sort(
            (a, b) => b.popularity - a.popularity
        );
        setContactList(() => [...sortedPopularity]);
    };

    const deleteContact = (index) => {
        let updatedList = contactList.filter(
            (contact) => contact.id !== contactList[index].id
        );
        setContactList(() => [...updatedList]);
    };

    const displayContacts = contactList.map((contact, index) => {
        return (
            <tr key={contact.id}>
                <td>
                    <img
                        src={contact.pictureUrl}
                        alt="contact-pic"
                        id="contactPic"
                    />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                    <button onClick={() => deleteContact(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <div className="App">
            <div style={{ display: 'flex' }}>
                <button onClick={addContact} className="buttons">
                    Add random contact
                </button>
                <button onClick={sortByName} className="buttons">
                    Sort by name
                </button>
                <button onClick={sortByPopularity} className="buttons">
                    Sort by popularity
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>{displayContacts}</tbody>
            </table>
        </div>
    );
}

export default App;

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
    const [contactList, setContactlist] = useState(contacts.slice(0, 5));

    const displayContacts = contactList.map((contact) => {
        return (
            <>
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
                </tr>
            </>
        );
    });

    const addContact = () => {
        let random =
            contacts[Math.floor(Math.random() * (contacts.length - 4) + 5)];
        console.log('random', random);
        setContactlist([...contactList, random]);
    };

    return (
        <div className="App">
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
            <button onClick={addContact}>Add random contact</button>
        </div>
    );
}

export default App;

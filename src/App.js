import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
    const displayContacts = contacts.map((contact) => {
        console.log('contact', contact);
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
                    <td>{contact.popularity}</td>
                </tr>
            </>
        );
    });
    return (
        <div className="App">
            <table>
                <thead>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </thead>
                <tbody>{displayContacts}</tbody>
            </table>
        </div>
    );
}

export default App;

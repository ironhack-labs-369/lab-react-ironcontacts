import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
    const displayContacts = contacts.slice(0, 5).map((contact) => {
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
    const randomContact = () => {
        let random =
            contacts[Math.floor(Math.random() * (5 - contacts.length) + 5)];
        console.log('random', random);
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
            <button onClick={randomContact}>Add random contact</button>
        </div>
    );
}

export default App;

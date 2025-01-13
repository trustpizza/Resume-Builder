import { useState } from "react";
import "../styles/User.css";

function User() {
    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Smith")
    const [email, setEmail] = useState("email@email.com")
    const [phoneNumber, setPhoneNumber] = useState("1 555 892-1234")

    return (
        <>
            <div className="section">
                <h2 className="text-lg">User Information</h2>
                <ul>
                    <li>
                        <label htmlFor="">First Name: </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </li>
                    <li>
                        <label htmlFor="">Last Name: </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </li>
                    <li>
                        <label htmlFor="">Email Address: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <label htmlFor="">Phone Number: </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
};

export default User;
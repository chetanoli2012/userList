import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Toast } from "react-bootstrap";
import "./Login.css";
import { useStateValue } from '../Stateprovider';
import { actionTypes } from '../reducer';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useStateValue();
    const [error, setError] = useState("");
    const [showA, setShowA] = useState(true);

    function toggleShowA() { setShowA(!showA)}
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email === 'foo' && password === 'bar') {
            let user = {
                name: 'test',
                email: 'foo'
            };
            dispatch({
                type: actionTypes.SET_USER,
                user
            })
        } else {
            { setShowA(true) }
            setError('Please user username: foo and password: bar')
        }
    }

    return (
        <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        // type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {
                    error &&
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Try again</strong>
                        </Toast.Header>
                        <Toast.Body>{error}</Toast.Body>
                    </Toast>
                }
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
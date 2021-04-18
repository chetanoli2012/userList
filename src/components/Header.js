import React from 'react'
import './Header.css';
import Button from "react-bootstrap/Button";
import { useStateValue } from '../Stateprovider';
import { actionTypes } from '../reducer';


export function Header() {

    const [state, dispatch] = useStateValue();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({
            type: actionTypes.REMOVE_USER,
        })
        window.location.href = '/login';
    }
    return (
        <div className='header'>
            <div className='header__right'>
                <Button onClick={handleSubmit} block size="lg">
                    Log out
                </Button>
            </div>

        </div>
    )
}
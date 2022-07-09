import React, { useState } from 'react';
import ExpenseDate from '../Expences/ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {

    // useState tagastab massiivi. Seega saab kasutada array destructioningi.
    // Esimene element on pointer, teine element on funktsioon, mille saab hiljem välja kutsuda pealkirja muutmiseks
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle('Uuendatud');
        console.log(title);
    };

    return( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} €</div>
            </div>
            <button onClick={clickHandler}>Vajuta</button>
        </Card>
    );
}

export default ExpenseItem;
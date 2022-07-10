import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {

    // 1. variant - kasutada mitut state'i.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // 2. variant - kasutada üht state'i. Väärtusena antakse edasi objekt, mitte sõne nagu esimeses variandis.
    // Vahe on selles, et uuendatakse kogu kolme omadust.
    // Mõlemad variandid on samaväärsed ja pole vahet kumba kasutada.

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enetredAmount: '',
    //     enteredDate: ''
    // });

    // Näitab, milline väärtus on kasutaja poolt sisestatud ja see salvestatakse
    function titleChangeHandler(event) {
        // 1. variant
        setEnteredTitle(event.target.value);
        // 2. variant
        // setUserInput({
            // spread operaator (...), et ülejäänud omadused kaasa võetaks, muidu jäävad tühjaks. See võtab objekti,
            // tõmbab kõik võti:väärtus paarid välja ning lisab uude objekti
            // ...userInput,
            // ja siis saame võti:väärtus paarid vajadusel üle kirjutada
            // enteredTitle: event.title.value,
        // });
        // 2. variant pole siiski hea lahendus, kuna sõlub eelmisest olekust. Parandus: funktsioonile anda edasi
        // teine funktsioon. Võetakse eelmise oleku (prevState) snapshot ja tagastatakse uue oleku snapshot.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    }

    function submitHandler(event) {
        event.preventDefault(); // vältimaks lehe uuesti laadimist pärast "saada" nupu vajutamist

        const expenseData = {
            title: enteredTitle,
            amunt: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Pealkiri</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Kogus</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Kuupäev</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Lisa kulutus</button>
        </div>
    </form>
}

export default ExpenseForm;
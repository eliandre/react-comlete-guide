import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {

    // Näitab, milline väärtus on kasutaja poolt sisestatud.
    function titleChangeHandler(event) {
        console.log(event.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Pealkiri</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Kogus</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Kuupäev</label>
                <input type="date" min="2019-01-01" max="2023-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Lisa kulutus</button>
        </div>
    </form>
}

export default ExpenseForm;
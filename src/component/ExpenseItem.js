import './ExpenseItem.css';

function ExpenseItem() {
    return( 
        <div className="expense-item">
            <div>28. märts 2022</div>
            <div className="expense-item__description">
                <h2>Auto kindlustus</h2>
                <div className="expense-item__price">165,50 €</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
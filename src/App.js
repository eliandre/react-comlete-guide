import ExpenseItem from './component/ExpenseItem';

function App() {

  const expenses = [
    { title: 'Auto kindlustus', amount: 165.50, date: new Date(2022, 2, 28) },
    { title: 'Söök', amount: 28.50, date: new Date(2022, 0, 18) },
    { title: 'Meelelahutus', amount: 225.00, date: new Date(2021, 8, 20) },
    { title: 'Kohting', amount: 75.68, date: new Date(2022, 7, 10) },
  ];

  return (
    <div>
      <header>
        <p>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
          <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </p>
      </header>
    </div>
  );
}

export default App;

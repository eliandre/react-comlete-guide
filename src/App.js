import Expenses from './component/Expences/Expenses';

function App() {

  const expenses = [
    { title: 'Auto kindlustus', amount: 165.50, date: new Date(2022, 2, 28) },
    { title: 'Söök', amount: 28.50, date: new Date(2022, 0, 18) },
    { title: 'Meelelahutus', amount: 225.00, date: new Date(2021, 8, 20) },
    { title: 'Kohting', amount: 75.68, date: new Date(2022, 7, 10) },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummary from './components/sales-by-gender';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesSummary />
      </div>
    </>
  );
}

export default App;

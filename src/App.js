import './assets/css/App.css';

import TitleBar from './components/TitleBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <FilterBar />
      <ProductList />
    </div>
  );
}

export default App;

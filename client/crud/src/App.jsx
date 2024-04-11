import './App.css';
import FetchRecords from './components/fetch/FetchRecords';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FetchContextProvider } from './contex/FetchContex';
import AddRecord from './components/addRecord/AddRecord';

function App() {
  return (
    <div className="app">
      <FetchContextProvider>
        <AddRecord></AddRecord>
        <FetchRecords></FetchRecords>
      </FetchContextProvider>
    </div>
  )
}

export default App

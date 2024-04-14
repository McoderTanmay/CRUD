import './App.css';
import FetchRecords from './components/fetch/FetchRecords';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FetchContextProvider } from './contex/FetchContex';
import AddRecord from './components/addRecord/AddRecord';
import { useState } from 'react';
import { postRequest, baseUrl } from './utils/services';
import ErrorComp from './components/utility/ErrorComp';

function App() {
  const [serverResponse, setServerResponse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();

  const addUserDetails = async(data)=>{
      
      setIsLoading(true);
      const response = await postRequest(`${baseUrl}/User/reate`, data);
      setIsLoading(false);
      setUserData(data);
      setServerResponse(response);
      if(response?.error){
        setError(true);
      }    
  }
  const onOkClickHandeler = ()=>{
    setError(false);
  }

  return (
    <div className="app">
        <FetchContextProvider fetchRecords={userData}>
          <AddRecord onAdd={addUserDetails}></AddRecord>
          <FetchRecords></FetchRecords>
          {error && <ErrorComp onOK={onOkClickHandeler} errorMsg={serverResponse?.message}></ErrorComp>}
        </FetchContextProvider>
    </div>
  )
}

export default App

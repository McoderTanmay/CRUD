import "./App.css";
import FetchRecords from "./components/fetch/FetchRecords";
import "bootstrap/dist/css/bootstrap.min.css";
import { FetchContextProvider } from "./contex/FetchContex";
import AddRecord from "./components/addRecord/AddRecord";
import Update from "./components/utility/UpdateRecord";
import { useState } from "react";
import { postRequest, baseUrl } from "./utils/services";
import ErrorComp from "./components/utility/ErrorComp";

function App() {
  const [serverResponse, setServerResponse] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [recordId, setRecordId] = useState('');
  
  const addUserDetails = async (data) => {
    setIsLoading(true);
    const response = await postRequest(`${baseUrl}/User/Create`, data);
    setIsLoading(false);
    setUserData(data);
    setServerResponse(response);
    if (response?.error) {
      setError(true);
    }
  };
  const onOkClickHandeler = () => {
    setError(false);
  };

  const deleteRecord = async (id) => {
    try {
      setIsLoading(true);
      const response = await postRequest(`${baseUrl}/User/Delete/${id}`);
      setIsLoading(false);
      setUserData(response);
    } catch (error) {
      setServerResponse(error);
    }
  };

  const updateRecord = async (id) => {
    setRecordId(id);
  };

  const updateDataHandeler = async (data) => {
    try {
      setIsLoading(true);
      const response = await postRequest(`${baseUrl}/User/Update/${recordId}`, data);
      setIsLoading(false);
      setRecordId();
      setUserData(response);
    } catch (error) {
      setServerResponse(error);
    }
  }

  const cancelHandeler = ()=>{
    setRecordId('');
  }

  return (
    <div className="app">
      <FetchContextProvider fetchRecords={userData}>
          <AddRecord onAdd={addUserDetails}></AddRecord>
          <FetchRecords
            onRecordId={deleteRecord}
            onUpdateRecordId={updateRecord}
          ></FetchRecords>
          {recordId.length > 0 && <Update onUpdate={updateDataHandeler} onCancel={cancelHandeler}></Update>}
          {error && (
            <ErrorComp
              onOK={onOkClickHandeler}
              errorMsg={serverResponse?.message}
            ></ErrorComp>
          )}
      </FetchContextProvider>
    </div>
  );
}

export default App;

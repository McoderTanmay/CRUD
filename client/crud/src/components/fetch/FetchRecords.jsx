import { useContext, useState} from "react";
import Records from "./Record";
import { fetchContext } from "../../contex/FetchContex";
import "./fetchRecords.css";

function Fetch({onRecordId, onUpdateRecordId}) {
  const { records, isLoading, error } = useContext(fetchContext);
  function idHandeler(id){
    onRecordId(id);
  }
  function updateIdHandeler(id){
    onUpdateRecordId(id);
  }

  return (
    <>
      <div className="outer">
        {error ? (
          <p>An error encountered while fetching</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          records && records.map((record) => (
            <Records key={record?._id} details={record} onDelete={idHandeler} onUpdate={updateIdHandeler}></Records>
          ))
        )}
      </div>
    </>
    
  );
}


export default Fetch;

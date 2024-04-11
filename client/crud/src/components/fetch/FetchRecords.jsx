import { useContext} from "react";
import Records from "./Record";
import { fetchContext } from "../../contex/FetchContex";
import "./fetchRecords.css";

function Fetch() {
  const { records, isLoading, error } = useContext(fetchContext);

  return (
    <div className="outer">
      {error ? (
        <p>An error encountered while fetching</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        records && records.map((record) => (
          <Records key={record?._id} details={record}></Records>
        ))
      )}
    </div>
  );
}


export default Fetch;

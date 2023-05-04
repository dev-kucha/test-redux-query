import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./redux/slices";
import { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { useFetchCats } from "./hooks";

function App(id) {
  const catsData = useSelector((state) => state.catReducer.catsData);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchCats(id);

  console.log(QueryClient);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div className="App">
      <h2>Data about cats with using Redux</h2>
      <span>
        <b>{catsData.fact}</b>
      </span>

      <h2>Data about cats with using React query</h2>
      <span>
        <b>{data.fact}</b>
      </span>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [count, setCount] = useState(0);

  const URL = "https://randomuser.me/api";

  const apiCall = async () => {
    try {
      const fetchData = await axios.get(URL);
      const response = await fetchData.data.results;
      setPosts(response);

      localStorage.setItem("apiData", JSON.stringify(fetchData));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, [count]);

  const handleReset = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App">
        {posts.map((item) => (
          <div className="app__wrapper" key={item.id}>
            <>
              <img
                className="app__wrapper--image"
                src={item.picture.large}
                alt="pic"
              />
            </>
            <div className="app__wrapper--fullName">
              <h4>Name:</h4>
              <p>
                {item.name.title}
                {item.name.first}
                {item.name.last}
              </p>
            </div>
            <div className="app__wrapper--email">
              <h4>Email:</h4>
              <p>{item.email}</p>
            </div>
            <div className="app__wrapper--gender">
              <h4>Gender:</h4>
              {item.gender}
            </div>
            <div>
              <button className="app__wrapper--btn" onClick={handleReset}>
                Refresh
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

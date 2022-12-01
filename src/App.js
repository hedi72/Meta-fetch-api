import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      {console.log(user)}
      <h1>Customer data</h1>
      <h2>FirstName: {user.results[0].name.first}</h2>
      <h2>LastName: {user.results[0].name.last}</h2>
      <h2>City: {user.results[0].location.city}</h2>
      <img src={user.results[0].picture.large} alt="image" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

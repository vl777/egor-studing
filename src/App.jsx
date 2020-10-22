import React from "react";

const App = () => {
  const onClick = () => {
    alert("egor учись");
    confirm(" Я учусь");
  };




  return (
    <div>
      
      <button onClick={onClick}>push me</button>
    </div>
  );
};

export default App;

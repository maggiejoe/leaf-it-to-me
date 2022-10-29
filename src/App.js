import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Header from './components/Header';

function App() {
  const [options] = useState([
    {
      name: "Sign Up"
    },
    {
      name: "Login"
    }
  ]);

  const [currentOption, setCurrentOption] = useState(options[0]);

  // const renderPage = () => {
  //   if (currentOption === "Sign Up") {
  //     return (
  //       <SignUp></SignUp>
  //     )
  //   } else if (currentOption === "Login") {
  //     return (
  //       <Login></Login>
  //     )
  //   }
  // }

  return (
    <div className="">
      <Header
        options={options}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      >
      </Header>
    </div>
  );
}

export default App;

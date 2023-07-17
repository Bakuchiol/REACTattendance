// import logo from './logo.svg';
import './App.css';
// ------------------- imports
import SignInForm from './components/SignInForm';
// import { useState } from 'react';
import List from './components/List';
// import ListItem from './components/ListItem';
import AttendanceCount from './components/AttendanceCount';

function App() {
  // const [learners, setLearners] = useState([]);

  // const addTwo = () => {};

  return (
    <div className="App">
      <h1>Sign Up</h1>
      {/* <SignInForm /> :: REACT ELEMENT */}
      {/* setLearners={setLearners} :: passing as props */}
      <SignInForm />
      <AttendanceCount />
      <List />
      {/* <ListItem /> */}
    </div>
  );
}

export default App;
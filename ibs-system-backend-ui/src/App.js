import './App.css';
import Navbar from './components/Navbar'
import AddUser from './components/AddUser';

//components (App) are used to render
//you can only return one parent so if you wrap them in empty tags, you can return more than 1
function App() {
  return (
    <>
    <Navbar />
    <AddUser />
    </>
  );
}

export default App;

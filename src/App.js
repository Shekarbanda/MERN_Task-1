import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Components/Posts';
import LoginSignUp from './Components/LoginSignup';
import Body from './Components/Body';

function App() {
  return (
    <div className='bg-white shadow-sm'>
      <Navbar/>
      <Banner/>
      <Posts/>
      <LoginSignUp/>
      <Body/>
    </div>
  );
}

export default App;

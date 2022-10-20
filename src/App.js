import logo from './logo.svg';
import './App.css';
import './Assets/Styles/myStyles.scss'
import SocialCard from './Components/SocialCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialCardContent from './Components/SocialCardContent';

function App() {
  return (
    <div className="App">
      <SocialCard/>
      {/* <SocialCardContent/> */}
    </div>
  );
}

export default App;

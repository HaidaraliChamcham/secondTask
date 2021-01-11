
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import SigninScreen from './screen/SigninScreen';
import AdminScreen from './screen/AdminScreen';
import HomeScreen from './screen/HomeScreen';
import userListPage from './screen/userListPage';
function App() {
  return (
    <BrowserRouter>
     <Route path="/" component={SigninScreen} exact></Route>
     <Route path="/home" component={HomeScreen}></Route>
     <Route path="/userlist" component={userListPage}></Route>
     <Route path="/admin" component={AdminScreen}></Route>
    </BrowserRouter>
  );
}

export default App;

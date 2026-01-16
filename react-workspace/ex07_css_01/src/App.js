import logo from './logo.svg';
import './App.css';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import LoginCon from './containers/LoginCon';
import IndexCon from './containers/IndexCon';
import RegisterCon from './containers/RegisterCon';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<IndexCon />}/>
      <Route path='/login' element={<LoginCon />}/>
      <Route path='/register' element={<RegisterCon />}/>
    </Routes>

  {/* 
    <Test03 test={"안녕하세요"} />
  */}
  </>);
}

export default App;

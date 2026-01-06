import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import { Route, Routes } from 'react-router-dom';
import MOnePage from './pages/member/MOnePage';
import MUpdatePage from './pages/member/MUpdatePage';
import HeaderCom from './components/common/HeaderCom';
import NotFound from './components/common/NotFound';
import MDeletePage from './pages/member/MDeletePage';

function App() {
  return (<>
    <Routes>
      <Route element={ <HeaderCom /> }>
        <Route path='/' element={<IndexPage />} />
        <Route path='/member'>
          <Route path='list' element={<MListPage />}  />
          <Route path='one' element={<MOnePage />}  />
          <Route path='update/:username' element={<MUpdatePage />}  />
          <Route path='delete/:username' element={<MDeletePage />}  />
        </Route>
      </Route>
      <Route path='*' element={ <NotFound /> }></Route>
    </Routes>
    

    </>
  );
}

export default App;

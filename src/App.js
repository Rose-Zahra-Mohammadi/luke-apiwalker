import './App.css';
import { Route, Routes } from 'react-router-dom';
import People from './views/People';
import Show from './views/Planets';
import HeaderForm from './components/HeaderForm';

function App() {
  return (
    <div className='App'>
      <HeaderForm/>

      <Routes>
        <Route path='/planets/:id' element ={<Planets/>}/>
        <Route path='/people/:id' element = {<People/>}/>

      </Routes>
 
    </div>
  );
}

export default App;

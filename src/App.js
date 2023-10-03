import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDeviceForm from './components/AddDeviceForm';
import DeviceList from './components/DeviceList';
import Map from './components/Map';


function App() {
  
  
  return (

    <div className="app__body">
      <div className='header'>
        <h1>Real Tracker</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/deviceList' element={<DeviceList />} />
          <Route exact path='/addDeviceForm' element={<AddDeviceForm />} />
          <Route exact path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
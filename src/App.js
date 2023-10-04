import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddDeviceForm from './components/AddDeviceForm';
import DeviceList from './components/DeviceList';
import LiveMap from './components/LiveMap';


function App() {


  return (

    <div className="app">
      <div className='header'>
        <h1>Real Tracker</h1>
      </div>
      <div className='app__body'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/deviceList' element={<DeviceList />} />
            <Route exact path='/addDeviceForm' element={<AddDeviceForm />} />
            <Route exact path='/liveMap' element={<LiveMap />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
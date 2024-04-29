import Home from './Pages/Home'
import Add from './Pages/Add';
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { MusicContextProvider } from './Context/MusicContext'
import MusicList from './Component/MusicList';
function App() {
  return (
<BrowserRouter>  
<MusicContextProvider >
  <Routes>
  <Route path='/' element={ <MusicList/>}></Route>
<Route path='/Add' element={<Add/>}> </Route>

  </Routes>
  </ MusicContextProvider >
  </BrowserRouter>
  )
}

export default App

import { Route,Routes } from 'react-router-dom'
import './App.css'
import LockScreen from './pages/LockScreen'
import Base from './pages/Base'
import AddKid from './pages/addKid'
import DeleteKide from './pages/deleteKid'

function App() {

  return (
    <>  
    {/* <LockScreen/> */}

    <Routes>
    <Route path='/' element={<LockScreen />}/>
    <Route element={<Base />} >
      <Route element={<LockScreen/>} path='lockScreen'></Route>
      <Route path='addKid' element={<AddKid/>} />
      <Route path='deleteKid' element={<DeleteKide/>} />
    </Route>
    </Routes>
    </>
  )
}

export default App

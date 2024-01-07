import { Route,Routes } from 'react-router-dom'
import './App.css'
import LockScreen from './pages/LockScreen'
import Base from './pages/Base'
import AddKid from './pages/addKid'
import EditPage from './pages/editPage'
import DeleteKide from './pages/deleteKid'
import HomePage from './pages/homePage'
import Afficher from './pages/afficher'
import DetailsPage from './pages/AfficherDetails'
import Stat from './pages/Stat'

function App() {

  return (
    <>  
    <Routes>
    <Route element={<Base />} >
            <Route path='/' element={<HomePage/>} />

      <Route path='home' element={<HomePage/>} />
      <Route path='addKid' element={<AddKid/>} />
      <Route path='deleteKid' element={<DeleteKide/>} />
      <Route path='afficher' element={<Afficher/>} />
      <Route path="/afficher/:id" element={<DetailsPage/>} />
      <Route path="/edit/:id" element={<EditPage/>} />
      <Route path="/stat" element={<Stat/>} />
    </Route>
    </Routes>
    </>
  )
}

export default App

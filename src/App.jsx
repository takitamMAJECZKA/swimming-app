import Home from './Pages/Home'
import Login from './Pages/Login'
import Stats from './Pages/Stats'
import Account from './Pages/Account'


import {HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route index path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/stats" element={<Stats />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="*" element={<Home />}/>
        </Routes>
    </Router>
  )
}

export default App

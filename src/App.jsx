import { Route, Routes } from 'react-router-dom'
import './App.css'
import SimpleProfileForm from './components/profilePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/submit-page">
          <Route index element={  <SimpleProfileForm/>} />
        </Route>
      </Routes>
    </>
  )
} 

export default App

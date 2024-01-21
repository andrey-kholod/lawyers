
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Quiz from './components/Quiz/Quiz'
import Congratulations from './components/Quiz/Congratulations'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/congratulations' element={<Congratulations />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import styles from "./styles.module.css";
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Profile from './pages/Profile';

function App() {

  return (
    <div className={styles.layout}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/TvShows' element={<TvShows />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App

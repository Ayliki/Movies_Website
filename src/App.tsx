import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import styles from "./styles.module.css";
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Search from './pages/Search/Search';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {

  return (
    <div className={styles.layout}>
      <AuthProvider>
        <FavoritesProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tvshows' element={<TvShows />} />
            <Route path="/search" element={<Search />} />
            <Route
              path='/profile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<Login />} />
          </Routes>
        </FavoritesProvider>

      </AuthProvider>

    </div>
  )
}

export default App

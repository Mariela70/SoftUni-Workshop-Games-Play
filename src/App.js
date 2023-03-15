import { Routes, Route } from 'react-router-dom';


import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import CreateGame from './components/CreateGame/CreateGame';
import EditGame from './components/EditGame/EditGame';
import Catalog from './components/Catalog/Catalog';
import GameDetails from './components/GameDetails/GameDetails';
import './App.css';
import PrivateRoute from './components/common/PrivateRoute';
import PrivateGuard from './components/common/PrivateGuard';


function App() {

  return (
    <AuthProvider>

      <div id="box">
        <Header />
        {/* Main Content */}
        <GameProvider >
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/create" element={(
                <PrivateRoute>
                  <CreateGame />
                </PrivateRoute>
              )} />
              <Route element={<PrivateGuard />}>
                <Route path="/games/:gameId/edit" element={<EditGame />} />
                <Route path="/logout" element={<Logout />} />

              </Route>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:gameId" element={<GameDetails />} />
            </Routes>


          </main>
        </GameProvider>


      </div>
    </AuthProvider>
  );
}

export default App;

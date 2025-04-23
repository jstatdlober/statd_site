import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KickoffIA from './pages/KickoffIA';
import Training from './pages/Training';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos/kickoff-ia" element={<KickoffIA />} />
        <Route path="/treinamento" element={<Training />} />
      </Routes>
    </Router>
  );
}

export default App;
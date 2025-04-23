import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

function Navigation() {
  return (
    <nav className="bg-white/5 backdrop-blur-sm pt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src="https://raw.githubusercontent.com/jstatdlober/boltnew/main/logo_statd_orange-removebg-preview.png"
              alt="Statd"
              className="h-24 mb-4"
            />
          </Link>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="text-white hover:text-blue-400 px-3 py-2">
                Serviços
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  to="/servicos/kickoff-ia"
                  className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  Kick-off IA Generativa
                </Link>
              </div>
            </div>
            <a
              href="mailto:jst999@gmail.com"
              className="text-white hover:text-blue-400 px-3 py-2 transition-colors"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
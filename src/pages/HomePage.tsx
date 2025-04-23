import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, HeartHandshake, Code2, ChevronRight, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';
import { TechSupportModal } from '../components/TechSupportModal';
import { AssessoriaModal } from '../components/AssessoriaModal';

function HomePage() {
  const [isTechSupportModalOpen, setIsTechSupportModalOpen] = useState(false);
  const [isAssessoriaModalOpen, setIsAssessoriaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navigation />

      {/* Hero Section */}
      <div 
        className="bg-gradient-to-br from-navy-900/90 to-blue-900/90 text-white relative"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/jstatdlober/boltnew/main/fundo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-blue-900/80" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Statd Serviços
            </h1>
            <p className="text-2xl text-blue-300 mb-8">
              Suporte Tecnológico • Assessoria • Treinamento • Desenvolvimento empresarial
            </p>
            <p className="text-xl text-white font-light leading-relaxed">
              Enquanto você se dedica ao seu negócio, deixe que a gente se preocupe com a evolução tecnológica
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => setIsTechSupportModalOpen(true)}
            className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all text-left"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Suporte Tecnológico</h3>
                <p className="text-gray-300">
                  Governança de tecnologia para apoio a decisões assertivas sobre componentes e tecnologias
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setIsAssessoriaModalOpen(true)}
            className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all text-left"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Assessoria</h3>
                <p className="text-gray-300">
                  Mentoria em tecnologia, Gestão de Processos de Negócio e Gestão do Conhecimento
                </p>
              </div>
            </div>
          </button>

          <Link
            to="/treinamento"
            className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Treinamento</h3>
                <p className="text-gray-300">
                  Capacitação profissional com foco em tecnologias emergentes e inovação.
                </p>
              </div>
            </div>
          </Link>

          <div className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Inovação e desenvolvimento</h3>
                <p className="text-gray-300">
                  Inovação com técnicas de Design Thinking, frameworks de desenvolvimento de produtos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mt-16 space-y-8">
          {/* Kickoff IA Service */}
          <Link
            to="/servicos/kickoff-ia"
            className="block bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 hover:from-blue-700 hover:to-blue-900 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Kick-off IA Generativa
                </h3>
                <p className="text-blue-200">
                  Descubra como implementar IA Generativa em sua empresa de forma eficiente e estratégica.
                </p>
              </div>
              <ChevronRight className="w-8 h-8 text-blue-300 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Online Training Service */}
          <Link
            to="/treinamento"
            className="block bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-8 hover:from-indigo-700 hover:to-indigo-900 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-indigo-300" />
                  <span className="text-indigo-300 font-medium">Curso Online</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Treinamento IA Generativa para Empresas
                </h3>
                <p className="text-indigo-200">
                  Aprenda os fundamentos e aplicações práticas da IA Generativa para transformar seu negócio.
                </p>
              </div>
              <ChevronRight className="w-8 h-8 text-indigo-300 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      <TechSupportModal
        isOpen={isTechSupportModalOpen}
        onClose={() => setIsTechSupportModalOpen(false)}
      />
      <AssessoriaModal
        isOpen={isAssessoriaModalOpen}
        onClose={() => setIsAssessoriaModalOpen(false)}
      />
    </div>
  );
}

export default HomePage;
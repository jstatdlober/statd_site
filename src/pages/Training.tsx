import React from 'react';
import Navigation from '../components/Navigation';
import { CheckCircle2, Star, BookOpen, GraduationCap, Users } from 'lucide-react';

function Training() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400 text-xl">Curso Online</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              IA Generativa<br />
              <span className="text-blue-400">nas Empresas</span>
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                Domine a IA Generativa e transforme sua empresa
              </h2>
              <p className="text-lg text-gray-300">
                Aprenda a implementar e utilizar a IA Generativa de forma estratégica em sua empresa, 
                aumentando a produtividade e inovação.
              </p>
              <p className="text-lg text-orange-400 font-bold mt-4">
                Curso de extensão universitária de curta duração, em parceria com a Universidade Anhanguera.
              </p>
              <div className="flex items-center mt-1">
                <p className="text-lg text-orange-400">
                  Certificado de conclusão reconhecido pelo MEC.
                </p>
                <img
                  src="/logo-anhanguera.png"
                  alt="Logo Anhanguera"
                  className="ml-4 w-16 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Course Overview */}
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Visão Geral do Curso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Conteúdo Completo</h3>
                <p className="text-gray-300">Mais de 4 horas de conteúdo prático e teórico</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Para Todos os Níveis</h3>
                <p className="text-gray-300">Do básico ao avançado, sem pré-requisitos técnicos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Certificado</h3>
                <p className="text-gray-300">Receba seu certificado ao concluir o curso</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">O que você vai aprender</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Fundamentos e mantras da IA Generativa",
              "Modelos LLM e técnicas de prompting",
              "RAG (Retrieval Augmented Generation) e suas aplicações",
              "Embeddings e pesquisas semânticas",
              "GraphRAG e sua implementação",
              "Agentes de IA e frameworks",
              "Roteiro prático de implementação",
              "Casos de uso e melhores práticas"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 p-6 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Presentation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Apresentação</h2>
          <div className="aspect-w-16 aspect-h-9 bg-white/5 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/2rreiZmrf_E"
              title="Apresentação do Curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Comece sua jornada na IA Generativa
          </h2>
          <p className="text-blue-200 mb-8">
            Transforme sua empresa com conhecimento prático e aplicável
          </p>
          <div className="flex justify-center gap-4 items-start">
            <div className="text-center">
              <a
                href="https://hotmart.com/pt-br/marketplace/produtos/ia-generativa-nas-empresas-primeiros-passos/M98119901S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Inscreva-se Agora
              </a>
              <p className="text-blue-200 mt-2 text-sm">
                Curso com certificado
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://pay.voompcreators.com.br/8235"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Inscreva-se agora
              </a>
              <p className="text-blue-200 mt-2 text-sm">
                Curso de extensão com certificado<br />reconhecido pelo MEC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
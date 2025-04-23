import React from 'react';
import { Brain, Clock, Target, Users, ChevronRight, BookOpen, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';

function KickoffIA() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Kick-off<br />
              <span className="text-blue-400">IA Generativa nas empresas</span>
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                Economize dezenas de horas de autoestudo e minimize erros por tentativas frustradas
              </h2>
              <p className="text-lg text-gray-300">
                IA Generativa é tendência e realidade.<br />
                Não é uma questão de SE, mas de QUANDO.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">O que é</h2>
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Um programa dinâmico e objetivo que vai direto ao ponto, compartilhando informações e conceitos e habilitando as empresas a ingressarem na jornada da IA Generativa.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Visão</h2>
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Auxiliar as organizações através da simplificação da adoção da IA Generativa, tornando-as aptas a aproveitar seu potencial transformador e com isso obter vantagem competitiva.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Valores</h2>
        <div className="grid gap-6">
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Competitividade</h3>
            <p className="text-gray-300 leading-relaxed">
              Fomentar a competitividade das empresas através do conhecimento de novas tecnologias e serviços.
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Integridade</h3>
            <p className="text-gray-300 leading-relaxed">
              Serviço de aconselhamento imparcial prestado de acordo com a realidade e necessidades dos clientes.
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Inovação</h3>
            <p className="text-gray-300 leading-relaxed">
              Cultivo de cultura de aprendizado contínuo e adaptação a mudanças no mercado.
            </p>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">Programa</h2>
        <div className="grid gap-8 mb-16">
          {[
            {
              number: "1",
              title: "Encontro on-line",
              description: "Apresentação de conceitos e componentes",
              icon: <Brain className="w-6 h-6" />
            },
            {
              number: "2",
              title: "Encontro on-line",
              description: "Levantamento de oportunidades",
              icon: <Target className="w-6 h-6" />
            },
            {
              number: "3",
              title: "Encontro on-line",
              description: "Avaliação de viabilidade técnica e definição de prioridades",
              subtitle: "Elaboração de relatório e projeto",
              icon: <Clock className="w-6 h-6" />
            },
            {
              number: "4",
              title: "Encontro on-line",
              description: "Apresentação de relatório e projeto técnico",
              icon: <Users className="w-6 h-6" />
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {item.icon}
                </div>
                <div>
                  <div className="text-blue-400 font-semibold">#{item.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  {item.subtitle && (
                    <p className="text-blue-400 mt-2 italic">{item.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilitator Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/5 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/jstatdlober/boltnew/main/juliano_oh1.jpg"
                alt="Juliano Statdlober"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
              />
              <h3 className="text-2xl font-bold text-white text-center mt-4">Juliano Statdlober</h3>
              <p className="text-blue-400 text-center">Facilitador</p>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed">
                Com mais de 30 anos de experiência como empreendedor na área de Tecnologia da Informação
                atuando como CTO e liderando o desenvolvimento de produtos de software, Juliano Statdlober
                se destaca como uma referência no setor. Bacharel em Ciências Econômicas com pós-graduação
                em Governança de TI, sua paixão por inteligência artificial generativa o levou a se
                aprofundar no tema, tornando-se um entusiasta e especialista. Juliano é também autor de
                diversos livros técnicos que abordam temas como gestão de serviços, gestão do conhecimento
                e IA generativa. Participou de dezenas de congressos de tecnologia no Brasil e no exterior.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Options */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Aprenda mais sobre o tema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <span className="text-white">Treinamento: IA Generativa nas empresas</span>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
          <a href="#" className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <span className="text-white">Livro: IA Generativa</span>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KickoffIA;
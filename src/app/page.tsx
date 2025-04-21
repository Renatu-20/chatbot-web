import Image from "next/image";
import Link from "next/link";
import { FiBarChart2, FiMessageSquare, FiDatabase, FiSettings, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Chatbot WhatsApp Web</h1>
          </div>
          <nav>
            <Link href="/dashboard" className="btn-primary">
              Acessar Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Chatbot WhatsApp Web</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plataforma completa para configurar, gerenciar e monitorar seu chatbot para WhatsApp através de uma interface web intuitiva e acessível.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">
              <FiBarChart2 size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dashboard Completo</h3>
            <p className="text-gray-600">
              Visualize estatísticas, gráficos e atividades recentes do seu chatbot em tempo real.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">
              <FiMessageSquare size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitoramento Inteligente</h3>
            <p className="text-gray-600">
              Configure palavras-chave e grupos para identificar oportunidades de vendas automaticamente.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">
              <FiDatabase size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Configuração Simplificada</h3>
            <p className="text-gray-600">
              Integre facilmente com WhatsApp Business API e Google Sheets sem conhecimentos técnicos.
            </p>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-4">
              <FiSettings size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fluxos Personalizados</h3>
            <p className="text-gray-600">
              Crie fluxos de atendimento personalizados para diferentes cenários de negócio.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Comece a usar agora</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard" className="btn-primary flex items-center gap-2">
              Acessar Dashboard <FiArrowRight />
            </Link>
            <Link href="/config/whatsapp" className="btn-secondary flex items-center gap-2">
              Configurar Chatbot <FiSettings />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Chatbot WhatsApp Web - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

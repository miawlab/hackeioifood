import { useState, useEffect } from 'react';
import { Check, Shield, Clock, TrendingUp, Zap, Star } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    window.location.href = 'https://pay.kirvano.com/e663d532-4487-4d6f-a856-138bb3dcbf7c';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">

        <section className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
            <p className="text-red-400 text-sm font-medium flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4" />
              OFERTA RELÂMPAGO - TERMINA EM BREVE
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cansado de ser refém das<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              taxas do iFood?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Descubra o método que <strong className="text-white">dobra seu lucro em 7 dias</strong> usando<br />
            Estratégia e Inteligência Artificial — sem gastar mais em anúncios.
          </p>

          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-3xl opacity-20"></div>
            <img
              src="/capa.png"
              alt="E-book Hackear o iFood"
              className="relative z-10 w-full drop-shadow-2xl"
            />
          </div>

        </section>

        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-700">
            <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚨</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">AVISO IMPORTANTE:</h3>
              <p className="text-slate-300 leading-relaxed">
                O iFood não é o inimigo. É a falta de conhecimento sobre como fazê-lo trabalhar a seu favor.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            O que você vai aprender em 7 dias:
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Hackeie o Algoritmo",
                description: "Domine os 7 Fatores que definem sua posição no topo da lista e pare de ser invisível."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Aumente o Ticket Médio",
                description: "Crie Combos Inteligentes (Âncora, Estrela, Psicológico) que fazem o cliente gastar mais sem perceber."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Venda com Palavras",
                description: "Use Copywriting Gastronômico e IA para criar descrições que fazem o cliente salivar e clicar em 'Comprar'."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Construa sua Independência",
                description: "Use o iFood como máquina de captação para criar sua Lista VIP no WhatsApp e vender sem pagar taxas."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Avaliações</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marina",
                text: "A estratégia do 'Combo Âncora' é genial! Criei um combo barato só pra atrair clique e o cliente acaba levando o Combo Estrela. Minha venda média subiu de R$ 30 pra R$ 55 na mesma semana."
              },
              {
                name: "Carlos",
                text: "Implementei o método dos 7 Fatores do Algoritmo e em apenas 5 dias meu restaurante aparecia no topo da lista do iFood. As vendas aumentaram 150% e os custos com anúncios caíram drasticamente!"
              },
              {
                name: "Beatriz",
                text: "Uso a IA para criar as descrições dos pratos agora. Os clientes realmente compram mais quando a descrição é irresistível. Meu ticket médio subiu de R$ 45 para R$ 80 em uma semana. Recomendo demais!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="border-l-4 border-orange-500 pl-4">
                  <p className="text-slate-200 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <footer className="text-slate-400">
                    <strong className="text-white">{testimonial.name}</strong> - Cliente Verificado
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleCTA}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              SIM, QUERO O E-BOOK POR APENAS R$ 29,90!
            </button>
          </div>
        </section>

        <section className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OFERTA RELÂMPAGO
          </h2>

          <div className="mb-6">
            <p className="text-white/80 text-xl mb-2 line-through">De R$ 97,00</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <p className="text-5xl md:text-6xl font-bold text-white">
                12x de R$ 2,99
              </p>
            </div>
            <p className="text-2xl text-white mt-4">ou R$ 29,90 à vista</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8 bg-black/20 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
            <Clock className="w-8 h-8 text-white" />
            <div className="text-center">
              <p className="text-white/80 text-sm mb-1">Oferta expira em:</p>
              <div className="flex gap-2 text-white font-mono font-bold text-2xl">
                <span className="bg-black/30 px-3 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-black/30 px-3 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-black/30 px-3 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Acesso Imediato</span>
            </div>
          </div>

          <button
            onClick={handleCTA}
            className="bg-white text-orange-600 font-bold text-xl px-12 py-6 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full md:w-auto"
          >
            GARANTIR MEU ACESSO POR R$ 29,90
            <span className="block text-sm mt-1">(Acesso Imediato)</span>
          </button>

          <p className="text-white/80 text-sm mt-6">
            🔒 Pagamento 100% seguro | ✅ Garantia incondicional de 7 dias
          </p>
        </section>

        <div className="text-center text-slate-400 text-sm">
          <p>© 2024 MIAW Solutions - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}

export default App;

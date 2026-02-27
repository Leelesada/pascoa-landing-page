import { motion } from "motion/react";
import { 
  Heart, 
  Gift, 
  MapPin, 
  QrCode, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Baby, 
  Sparkles,
  Users,
  CheckCircle2
} from "lucide-react";

const itemsInfantil = [
  { name: "Fralda P", qty: "40 pacotes" },
  { name: "Fralda M", qty: "30 pacotes" },
  { name: "Fralda G", qty: "30 pacotes" },
  { name: "Lenço umedecido", qty: "100 pacotes" },
  { name: "Pomada de assadura", qty: "30 unidades" },
  { name: "Sabonete infantil", qty: "30 unidades" },
  { name: "Creme dental infantil", qty: "20 unidades" },
  { name: "Escova de dente infantil", qty: "20 unidades" },
  { name: "Shampoo infantil", qty: "20 unidades" },
  { name: "Condicionador infantil", qty: "20 unidades" },
];

const itemsJuvenil = [
  { name: "Absorvente c/ ou s/ abas", qty: "25 pacotes" },
  { name: "Desodorante feminino", qty: "30 unidades" },
  { name: "Papel higiênico", qty: "30 pacotes" },
  { name: "Escova de dente", qty: "30 unidades" },
  { name: "Creme dental", qty: "30 unidades" },
  { name: "Sabonete", qty: "30 unidades" },
  { name: "Shampoo", qty: "20 unidades" },
  { name: "Condicionador", qty: "20 unidades" },
];

const itemsDoces = [
  { name: "Barra de chocolate", qty: "25 unidades" },
  { name: "Caixa de chocolate", qty: "25 unidades" },
  { name: "Amendoim", qty: "25 unidades" },
  { name: "Colomba Pascal", qty: "25 unidades" },
];

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-brand/20 selection:text-stone-900">
      {/* Hero Section */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#fdfcfb]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
            alt="Easter Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfcfb]/50 to-[#fdfcfb]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-stone-900 bg-brand rounded-full">
              Campanha Social 2026
            </span>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 mb-6 leading-tight">
              Páscoa Além <br />
              <span className="italic text-brand-dark">dos Números</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-10">
              Na Lumini Contabilidade, acreditamos que o valor real não está nas planilhas, 
              mas no impacto que geramos na vida de quem mais precisa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#como-ajudar" 
                className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
              >
                Quero Contribuir
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sobre" 
                className="w-full sm:w-auto px-8 py-4 border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-all"
              >
                Conhecer a Campanha
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Campaign Explanation */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="serif text-4xl md:text-5xl font-bold text-stone-900 mb-8">
                O que é a campanha?
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  A campanha <strong>“Páscoa Além dos Números”</strong> nasceu do desejo da Lumini Contabilidade 
                  de transformar a realidade de crianças e adolescentes em situação de vulnerabilidade em Gaspar.
                </p>
                <p>
                  Neste ano, unimos forças para apoiar duas instituições fundamentais da nossa cidade, 
                  garantindo que o cuidado e a esperança cheguem a quem mais precisa.
                </p>
              </div>
              
              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-brand/10 rounded-2xl border border-brand/20">
                  <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-dark" /> Lar Pequeno Anjo
                  </h3>
                  <p className="text-sm text-stone-600">
                    Acolhimento para crianças de 0 a 11 anos em situação de vulnerabilidade.
                  </p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-brand-dark" /> Lar Acolhedor das Meninas
                  </h3>
                  <p className="text-sm text-stone-600">
                    Abrigo e cuidado para meninas de 12 a 18 anos em situação de vulnerabilidade social.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="Foto-LP.png" 
                alt="Páscoa Além dos Números" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="serif text-4xl md:text-5xl font-bold text-stone-900 mb-8">
              Por que essa campanha é importante?
            </h2>
            <p className="text-lg text-stone-600 mb-16">
              Muitas vezes, olhamos para a contabilidade apenas como números em uma tela. 
              Mas por trás de cada dado, existe uma história. Acreditamos que a verdadeira 
              prosperidade de uma comunidade se mede pela forma como cuidamos dos nossos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-brand-dark" />,
                title: "Dignidade",
                desc: "Garantir itens básicos de higiene e cuidado para quem está em fase de crescimento."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-brand-dark" />,
                title: "Esperança",
                desc: "Mostrar que a comunidade se importa e está presente na vida dessas crianças e jovens."
              },
              {
                icon: <Gift className="w-8 h-8 text-brand-dark" />,
                title: "Alegria",
                desc: "Proporcionar um momento doce e especial em uma data tão significativa como a Páscoa."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 inline-flex p-4 bg-brand/10 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="serif text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help - Items List */}
      <section id="como-ajudar" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">Como você pode ajudar?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Estamos arrecadando itens essenciais e guloseimas para tornar a Páscoa 
              dessas crianças e adolescentes mais digna e acolhedora.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Infantil */}
            <motion.div {...fadeIn} className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-brand/20 rounded-xl text-stone-900">
                  <Baby className="w-6 h-6" />
                </div>
                <h3 className="serif text-2xl font-bold text-stone-900">Infantil</h3>
              </div>
              <ul className="space-y-4">
                {itemsInfantil.map((item, i) => (
                  <li key={i} className="flex items-center justify-between py-2 border-b border-stone-200/50 last:border-0">
                    <span className="text-stone-700">{item.name}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white rounded-md text-stone-500 border border-stone-200">{item.qty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Juvenil */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-stone-200 rounded-xl text-stone-900">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="serif text-2xl font-bold text-stone-900">Juvenil</h3>
              </div>
              <ul className="space-y-4">
                {itemsJuvenil.map((item, i) => (
                  <li key={i} className="flex items-center justify-between py-2 border-b border-stone-200/50 last:border-0">
                    <span className="text-stone-700">{item.name}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white rounded-md text-stone-500 border border-stone-200">{item.qty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Doces */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-brand p-8 rounded-3xl text-stone-900 shadow-xl shadow-brand/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="serif text-2xl font-bold">Para Adoçar</h3>
              </div>
              <ul className="space-y-4">
                {itemsDoces.map((item, i) => (
                  <li key={i} className="flex items-center justify-between py-2 border-b border-black/10 last:border-0">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white/20 rounded-md">{item.qty}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-4 bg-white/10 rounded-2xl border border-black/10">
                <p className="text-sm italic opacity-90">
                  "Um pequeno gesto para nós, um mundo de doçura para eles."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collection Points & Pix */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Collection Point */}
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-stone-900 text-white rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="serif text-2xl font-bold text-stone-900">Onde entregar?</h3>
                  <p className="text-stone-500">Ponto de coleta oficial</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-stone-50 rounded-2xl">
                  <p className="font-bold text-stone-900 mb-1">Lumini Contabilidade</p>
                  <p className="text-stone-600">Avenida Dep. Francisco Mastella, 95 - Sala 6</p>
                  <p className="text-stone-600">Sete de Setembro, Gaspar - SC</p>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Horário: 07:30 às 17:30h</span>
                </div>
                <p className="text-sm text-stone-500 italic">
                  * Você também pode entregar diretamente para qualquer colaborador da nossa equipe.
                </p>
              </div>
            </motion.div>

            {/* Pix Donation */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-brand/10 text-brand-dark rounded-2xl">
                  <QrCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="serif text-2xl font-bold text-stone-900">Doação via Pix</h3>
                  <p className="text-stone-500">Rápido, seguro e direto</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 bg-white rounded-2xl border border-stone-100 flex items-center justify-center p-2 shadow-inner">
                  <img 
                    src="pix-qr-code.png" 
                    alt="Pix QR Code" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-stone-600">
                    Se preferir contribuir financeiramente, utilizaremos o valor para a compra dos itens faltantes da lista.
                  </p>
                  <div className="p-4 bg-brand/10 rounded-xl border border-brand/20 select-all cursor-pointer group relative">
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">Chave Pix (E-mail)</p>
                    <p className="font-mono text-stone-900 break-all">carlos@luminisolucoes.com.br</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <circle cx="100" cy="50" r="50" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h2 {...fadeIn} className="serif text-4xl md:text-6xl font-bold mb-8">
              O impacto de um gesto <br />
              <span className="text-brand italic">vai além do que podemos contar.</span>
            </motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-xl text-stone-400 leading-relaxed mb-12">
              Ao doar, você não está apenas entregando um item. Você está entregando 
              um sorriso, um momento de alívio para uma cuidadora e a certeza de que 
              essas crianças e jovens não estão sozinhos.
            </motion.p>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-wrap gap-12">
              <div>
                <p className="text-5xl font-bold text-white mb-2">2</p>
                <p className="text-stone-500 uppercase tracking-widest text-xs">Instituições apoiadas</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">100%</p>
                <p className="text-stone-500 uppercase tracking-widest text-xs">Transparência na entrega</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">∞</p>
                <p className="text-stone-500 uppercase tracking-widest text-xs">Amor compartilhado</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-brand-dark mx-auto mb-8" />
            <h2 className="serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Vamos fazer desta Páscoa um momento inesquecível?
            </h2>
            <p className="text-lg text-stone-600 mb-10">
              Cada doação, não importa o tamanho, faz uma diferença enorme. 
              Junte-se à Lumini Contabilidade nesta corrente de bem.
            </p>
            <a 
              href="https://www.instagram.com/lumini.contabilidade/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200"
            >
              Acompanhe nas Redes Sociais
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
              <img 
                src="logo-preto.png" 
                alt="Lumini Contabilidade Logo" 
                className="h-16 object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
        
                <p className="text-stone-500 text-sm">Muito além dos números.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/lumini.contabilidade/" 
                className="p-3 bg-stone-50 rounded-full text-stone-600 hover:bg-brand/20 hover:text-stone-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/luminisolucoes" 
                className="p-3 bg-stone-50 rounded-full text-stone-600 hover:bg-brand/20 hover:text-stone-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-50 text-center text-stone-400 text-xs">
            <p>© 2026 Lumini Contabilidade. Campanha Social Páscoa Além dos Números.</p>
            <p className="mt-2">Gaspar - Santa Catarina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

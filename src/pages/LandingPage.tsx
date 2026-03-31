import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { MessageCircle, BarChart3, LayoutTemplate, Zap, Check, Instagram, Send } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight">ChatTech</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-foreground-muted">
              <a href="#produto" className="hover:text-foreground transition-colors">Produto</a>
              <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
              <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden md:inline-flex">
              <a href="#planos">Ver planos</a>
            </Button>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-border bg-panel-soft px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
                Plataforma para tráfego pago e funis conversacionais
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
                Venda no ritmo da conversa, não no ritmo do improviso.
              </h1>
              <p className="text-lg text-foreground-muted max-w-xl leading-relaxed">
                A ChatTech transforma cliques em conversas guiadas com cara de canal real, templates prontos, preview vivo e leitura BI para você vender mais com menos atrito técnico.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/login">Entrar e assinar agora</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#produto">Ver como funciona</a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {['Sem VPS', 'Sem setup técnico', 'Templates de canal prontos', 'BI para campanha'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-foreground-muted bg-panel-soft px-3 py-1.5 rounded-md border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
              <div className="relative bg-panel border border-border rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                  <div>
                    <div className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-1">ChatTech Builder</div>
                    <div className="text-lg font-medium">Sua oferta em formato de conversa.</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-green-500 uppercase tracking-wider">Online</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-2">Fluxo Principal</div>
                    {['Entrada pelo anúncio', 'Qualificação da dor', 'Prova e contexto', 'Oferta e CTA'].map((step, i) => (
                      <div key={i} className="bg-panel-soft border border-border rounded-lg p-3 text-sm flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-background flex items-center justify-center text-xs text-foreground-muted">{i + 1}</div>
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-2">Leads e Conclusão</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-panel-soft border border-border rounded-lg p-4">
                          <div className="text-xs text-foreground-muted mb-1">LEADS</div>
                          <div className="text-2xl font-semibold">1.284</div>
                        </div>
                        <div className="bg-panel-soft border border-border rounded-lg p-4">
                          <div className="text-xs text-foreground-muted mb-1">CONCLUSÃO</div>
                          <div className="text-2xl font-semibold">42%</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-foreground-muted uppercase tracking-wider font-semibold mb-2">Origem do Tráfego</div>
                      <div className="space-y-3">
                        {[
                          { name: 'Instagram Ads', val: '48%', color: 'bg-primary' },
                          { name: 'Facebook Ads', val: '27%', color: 'bg-blue-500' },
                          { name: 'TikTok Ads', val: '16%', color: 'bg-white' },
                        ].map((src) => (
                          <div key={src.name} className="bg-panel-soft border border-border rounded-lg p-3">
                            <div className="flex justify-between text-sm mb-2">
                              <span>{src.name}</span>
                              <span className="font-medium">{src.val}</span>
                            </div>
                            <div className="h-1.5 bg-background rounded-full overflow-hidden">
                              <div className={`h-full ${src.color}`} style={{ width: src.val }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="produto" className="py-20 px-6 bg-background-soft border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Produto</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Uma plataforma pensada para vender, testar e decidir com clareza.</h2>
              <p className="text-foreground-muted text-lg">A inspiração visual é premium, mas o foco aqui é prático: fazer a sua operação rodar com mais controle, mais leitura e mais poder de conversão.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: LayoutTemplate,
                  title: "Monte a conversa em mapa, vendo o canal acontecer na tela ao lado.",
                  desc: "Ajuste copy, narrativa, perguntas, condições e CTA com preview vivo de WhatsApp, Instagram e Telegram.",
                  label: "Builder Visual"
                },
                {
                  icon: Zap,
                  title: "Use molduras prontas para vender com contexto e percepção real de canal.",
                  desc: "Não é só mudar cor. Você configura perfil, status, apresentação e experiência do lead em cada canal.",
                  label: "Templates de Canal"
                },
                {
                  icon: BarChart3,
                  title: "Descubra de onde o lead veio, até onde ele avançou e em que horário mais converte.",
                  desc: "Acompanhe origem, progresso no fluxo, abandono e desempenho por campanha para decidir melhor.",
                  label: "Leitura BI"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-panel border border-border rounded-2xl p-8 hover:border-border-primary transition-colors">
                  <div className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-4">{feature.label}</div>
                  <h3 className="text-xl font-semibold mb-3 leading-snug">{feature.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="py-24 px-6 bg-background relative overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Canais Suportados</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">A experiência nativa que o seu lead já conhece.</h2>
              <p className="text-foreground-muted text-lg">Crie fluxos de conversa com a interface exata do aplicativo que o seu cliente usa todos os dias. Aumente a confiança e a conversão com templates de alta fidelidade.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* WhatsApp */}
              <div className="bg-panel border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-panel-soft border border-border flex items-center justify-center mb-6 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors shadow-lg">
                  <MessageCircle className="w-8 h-8 text-foreground-muted group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  O canal favorito do brasileiro. Templates otimizados para recuperação de carrinho, qualificação de leads e vendas diretas.
                </p>
              </div>

              {/* Instagram Direct */}
              <div className="bg-panel border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#E1306C]/50 hover:bg-[#E1306C]/5 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-panel-soft border border-border flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-[#FFDC80] group-hover:via-[#F56040] group-hover:to-[#833AB4] group-hover:border-transparent transition-colors shadow-lg">
                  <Instagram className="w-8 h-8 text-foreground-muted group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instagram Direct</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Transforme seguidores em clientes. Responda stories, crie automações de DM e feche vendas sem sair do app.
                </p>
              </div>

              {/* Telegram */}
              <div className="bg-panel border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#0088cc]/50 hover:bg-[#0088cc]/5 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-panel-soft border border-border flex items-center justify-center mb-6 group-hover:bg-[#0088cc] group-hover:border-[#0088cc] transition-colors shadow-lg">
                  <Send className="w-8 h-8 text-foreground-muted group-hover:text-white transition-colors ml-1" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Telegram</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Ideal para lançamentos e comunidades. Envie áudios, vídeos e crie funis complexos com alta taxa de entrega.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planos" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Planos</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Escale suas conversas.</h2>
              <p className="text-foreground-muted text-lg">Escolha o plano ideal para o momento da sua operação. Sem taxas ocultas, cancele quando quiser.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Plan 1: Starter */}
              <div className="bg-panel border border-border rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-sm text-foreground-muted mb-6">Para quem está validando a primeira oferta.</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold">R$ 97</span>
                  <span className="text-foreground-muted">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Até 1.000 leads/mês', '1 Bot ativo', 'Templates básicos', 'Suporte por email'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Assinar Starter</Link>
                </Button>
              </div>

              {/* Plan 2: Pro (Highlighted) */}
              <div className="bg-panel-soft border border-primary rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-primary/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  Mais Popular
                </div>
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-sm text-foreground-muted mb-6">Para operações rodando tráfego diário.</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold">R$ 297</span>
                  <span className="text-foreground-muted">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Até 10.000 leads/mês', 'Bots ilimitados', 'Todos os templates', 'Leitura BI avançada', 'Suporte prioritário'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-hover text-white" asChild>
                  <Link to="/login">Assinar Pro</Link>
                </Button>
              </div>

              {/* Plan 3: Scale */}
              <div className="bg-panel border border-border rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Scale</h3>
                <p className="text-sm text-foreground-muted mb-6">Para agências e grandes volumes.</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold">R$ 997</span>
                  <span className="text-foreground-muted">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Leads ilimitados', 'Múltiplos workspaces', 'API e Webhooks', 'Gerente de conta', 'Treinamento do time'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Assinar Scale</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6 bg-background-soft border-t border-border">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Perguntas Frequentes</h2>
              <p className="text-foreground-muted text-lg">Tudo o que você precisa saber sobre a ChatTech.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Para quem a ChatTech foi criada?",
                  a: "Para profissionais de tráfego pago, infoprodutores, afiliados e operações comerciais que vendem por conversa guiada."
                },
                {
                  q: "Preciso configurar servidor ou infraestrutura?",
                  a: "Não. A proposta da ChatTech é justamente tirar esse peso técnico e te deixar focado na oferta e na conversão."
                },
                {
                  q: "Posso usar mais de um canal na mesma operação?",
                  a: "Sim. Você pode criar chatbots diferentes por canal e adaptar a mesma oferta para contextos diferentes."
                },
                {
                  q: "O login serve para clientes e administração?",
                  a: "Sim. O mesmo ponto de entrada leva cada conta para a área correta conforme o perfil de acesso."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-panel border border-border rounded-2xl p-6 md:p-8 hover:border-border-primary transition-colors">
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">?</div>
                    {faq.q}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-background text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-md tracking-tight">ChatTech</span>
          </div>
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} ChatTech. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133-.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

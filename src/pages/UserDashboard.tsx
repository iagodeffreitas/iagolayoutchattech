import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { MessageCircle, Settings, LogOut, Plus, LayoutTemplate, Download, FolderPlus, MoreVertical } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-sm leading-tight">ChatTech</h1>
            <p className="text-[10px] text-foreground-muted uppercase tracking-widest font-medium">Workspace Studio</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 h-9">
            <Settings className="w-4 h-4" />
            Configurações
          </Button>
          <Button variant="outline" size="sm" className="gap-2 h-9" asChild>
            <Link to="/login">
              <LogOut className="w-4 h-4" />
              Sair
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto p-6 md:p-8 space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Welcome Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-panel to-background-soft border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-panel-strong text-foreground-muted px-2 py-1 rounded border border-border">Painel principal</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">Liberado</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">Gestão</span>
                </div>
                
                <h2 className="text-4xl font-semibold tracking-tight mb-4">Bom te ver de volta, Iago.</h2>
                <p className="text-foreground-muted text-lg max-w-xl mb-8 leading-relaxed">
                  Crie, organize e publique seus bots com mais velocidade. Esta home agora funciona como um centro de comando, para você entender rápido o que está pronto, o que ainda está em rascunho e qual próximo movimento faz mais sentido.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button className="gap-2 bg-primary hover:bg-primary-hover text-white h-11 px-6">
                    <Plus className="w-4 h-4" />
                    Criar bot do zero
                  </Button>
                  <Button variant="outline" className="gap-2 h-11 px-6">
                    <LayoutTemplate className="w-4 h-4" />
                    Usar template
                  </Button>
                  <Button variant="outline" className="gap-2 h-11 px-6">
                    <Download className="w-4 h-4" />
                    Importar JSON
                  </Button>
                </div>

                {/* BI Metrics Section */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted">Visão Geral de Performance</h3>
                    <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary-hover">
                      Ver relatórios completos
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-panel-soft border border-border rounded-xl p-4">
                      <div className="text-xs text-foreground-muted mb-1">Conversas Ativas</div>
                      <div className="text-2xl font-semibold text-white">1,284</div>
                      <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        +12% vs mês ant.
                      </div>
                    </div>
                    <div className="bg-panel-soft border border-border rounded-xl p-4">
                      <div className="text-xs text-foreground-muted mb-1">Taxa de Resposta</div>
                      <div className="text-2xl font-semibold text-white">94.2%</div>
                      <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        +2.1% vs mês ant.
                      </div>
                    </div>
                    <div className="bg-panel-soft border border-border rounded-xl p-4">
                      <div className="text-xs text-foreground-muted mb-1">Leads Capturados</div>
                      <div className="text-2xl font-semibold text-white">458</div>
                      <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        +18% vs mês ant.
                      </div>
                    </div>
                    <div className="bg-panel-soft border border-border rounded-xl p-4">
                      <div className="text-xs text-foreground-muted mb-1">Tempo Médio</div>
                      <div className="text-2xl font-semibold text-white">1m 42s</div>
                      <div className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                        -5s vs mês ant.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Fluxo Rápido", desc: "Crie um bot em branco e vá direto para o builder visual." },
                    { title: "Templates Prontos", desc: "Use modelos de captação, fechamento e oferta para ganhar velocidade." },
                    { title: "Operação Central", desc: "Abra o tema, revise o compartilhamento e publique com menos fricção." }
                  ].map((card, i) => (
                    <div key={i} className="bg-panel-soft border border-border rounded-xl p-5 hover:border-border-primary transition-colors cursor-pointer">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-2">{card.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active Workspace Sidebar */}
          <div className="bg-panel border border-border rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted">Workspace Ativo</div>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">Liberado</span>
            </div>
            <h3 className="text-xl font-semibold mb-6">Workspace de Iago de Freitas</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
              <div className="bg-background-soft border border-border rounded-xl p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Bots Ativos</div>
                <div className="text-3xl font-semibold mb-1">1</div>
                <div className="text-xs text-foreground-muted">1 publicados</div>
              </div>
              <div className="bg-background-soft border border-border rounded-xl p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Pastas</div>
                <div className="text-3xl font-semibold mb-1">0</div>
                <div className="text-xs text-foreground-muted">Comece organizando por oferta</div>
              </div>
              <div className="bg-background-soft border border-border rounded-xl p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Rascunhos</div>
                <div className="text-3xl font-semibold mb-1">0</div>
                <div className="text-xs text-foreground-muted">Tudo está publicado</div>
              </div>
              <div className="bg-background-soft border border-border rounded-xl p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Plano</div>
                <div className="text-xl font-semibold mb-1">Liberado</div>
                <div className="text-xs text-foreground-muted">Sem bloqueios para sua conta</div>
              </div>
            </div>

            <div className="bg-background-soft border border-border rounded-xl p-4 mt-auto">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Próximo movimento recomendado</div>
              <p className="text-sm text-foreground-muted">Seu workspace já está pronto para operar. Agora foque em iteração e escala.</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Total de bots", val: "1", desc: "Biblioteca principal do workspace" },
            { title: "Publicados", val: "1", desc: "Prontos para receber tráfego" },
            { title: "Rascunhos", val: "0", desc: "Ainda em ajuste ou teste" },
            { title: "Pastas", val: "0", desc: "Organização por campanha ou oferta" },
          ].map((stat, i) => (
            <div key={i} className="bg-panel border border-border rounded-xl p-5">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">{stat.title}</div>
              <div className="text-3xl font-semibold mb-2">{stat.val}</div>
              <div className="text-xs text-foreground-muted">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Library Section */}
        <div className="bg-panel border border-border rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Biblioteca do Workspace</div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Bots e pastas</h2>
              <p className="text-sm text-foreground-muted max-w-2xl">Aqui fica sua área de operação completa: criar bots, organizar pastas, duplicar fluxos e abrir qualquer projeto em andamento.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground-muted">
              <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center">
                <FolderPlus className="w-3 h-3 text-blue-400" />
              </div>
              0 pastas organizadas
            </div>
          </div>

          <div className="mb-6">
            <Button variant="outline" size="sm" className="gap-2">
              <FolderPlus className="w-4 h-4" />
              Criar uma pasta
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Create Bot Card */}
            <div className="aspect-[3/4] bg-primary hover:bg-primary-hover transition-colors rounded-xl border border-primary-hover flex flex-col items-center justify-center text-white cursor-pointer group">
              <Plus className="w-8 h-8 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Criar um bot</span>
            </div>

            {/* Existing Bot Card */}
            <div className="aspect-[3/4] bg-background-soft border border-border rounded-xl p-5 flex flex-col relative group hover:border-border-primary transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-auto">
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">Live</span>
                <button className="p-1.5 rounded-md hover:bg-panel text-foreground-muted hover:text-foreground transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mt-auto mb-auto">
                <div className="w-12 h-12 rounded-xl bg-panel border border-border flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-foreground-muted" />
                </div>
                <span className="font-semibold text-center">Meu bot</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

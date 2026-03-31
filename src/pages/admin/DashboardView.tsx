import { Users, Bot, MessageSquare, DollarSign, Activity, Database, Server, MessageCircle, MoreVertical } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function DashboardView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-1">Visão Geral da Operação</h2>
          <p className="text-foreground-muted">Métricas e status em tempo real da plataforma.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-medium text-green-500 uppercase tracking-wider">Sistema Operacional</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Usuários Ativos", val: "1.284", trend: "+12%", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
          { title: "Bots Criados", val: "8.492", trend: "+24%", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/10" },
          { title: "Mensagens (24h)", val: "1.2M", trend: "+5%", icon: MessageSquare, color: "text-green-400", bg: "bg-green-500/10" },
          { title: "Receita (MRR)", val: "R$ 142k", trend: "+8%", icon: DollarSign, color: "text-orange-400", bg: "bg-orange-500/10" },
        ].map((metric, i) => (
          <div key={i} className="bg-panel border border-border rounded-xl p-6 flex items-start justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">{metric.title}</div>
              <div className="text-3xl font-semibold mb-2">{metric.val}</div>
              <div className="text-xs text-green-400 font-medium">{metric.trend} <span className="text-foreground-muted font-normal">vs mês anterior</span></div>
            </div>
            <div className={`w-10 h-10 rounded-lg ${metric.bg} flex items-center justify-center`}>
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Recent Users Table */}
          <div className="bg-panel border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Últimos Usuários Registrados</h3>
                <p className="text-sm text-foreground-muted">Novas contas criadas nas últimas 24 horas.</p>
              </div>
              <Button variant="outline" size="sm">Ver todos</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] uppercase tracking-wider text-foreground-muted bg-background-soft">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Usuário</th>
                    <th className="px-6 py-4 font-semibold">Plano</th>
                    <th className="px-6 py-4 font-semibold">Bots</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { name: "Iago de Freitas", email: "iago@example.com", plan: "Pro", bots: 3, status: "Ativo" },
                    { name: "João Silva", email: "joao@example.com", plan: "Starter", bots: 1, status: "Ativo" },
                    { name: "Maria Oliveira", email: "maria@example.com", plan: "Enterprise", bots: 12, status: "Pendente" },
                    { name: "Pedro Santos", email: "pedro@example.com", plan: "Pro", bots: 5, status: "Bloqueado" },
                  ].map((user, i) => (
                    <tr key={i} className="hover:bg-background-soft/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{user.name}</div>
                        <div className="text-foreground-muted text-xs">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-panel-strong border border-border">
                          {user.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground-muted">{user.bots}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-medium border ${
                          user.status === 'Ativo' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          user.status === 'Pendente' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                          'bg-red-500/10 text-red-400 border-red-500/20'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 rounded-md hover:bg-panel-strong text-foreground-muted hover:text-foreground transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Bots */}
          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Bots Mais Ativos</h3>
                <p className="text-sm text-foreground-muted">Bots com maior volume de mensagens hoje.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Lançamento VIP", owner: "Iago de Freitas", msgs: "45.2k", conv: "68%" },
                { name: "Suporte Vendas", owner: "Maria Oliveira", msgs: "32.1k", conv: "42%" },
                { name: "Captação Lead", owner: "João Silva", msgs: "28.5k", conv: "55%" },
                { name: "Recuperação Carrinho", owner: "Pedro Santos", msgs: "15.8k", conv: "22%" },
              ].map((bot, i) => (
                <div key={i} className="bg-background-soft border border-border rounded-xl p-4 flex items-center justify-between group hover:border-border-primary transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-panel border border-border flex items-center justify-center">
                      <Bot className="w-5 h-5 text-foreground-muted" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{bot.name}</div>
                      <div className="text-xs text-foreground-muted">{bot.owner}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm">{bot.msgs}</div>
                    <div className="text-[10px] text-green-400 font-medium">{bot.conv} conv.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* System Status Sidebar */}
        <div className="space-y-6">
          <div className="bg-panel border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">Status do Sistema</h3>
            
            <div className="space-y-6">
              {[
                { name: "API Principal", status: "Operacional", uptime: "99.99%", icon: Activity, color: "text-green-400" },
                { name: "Banco de Dados", status: "Operacional", uptime: "100%", icon: Database, color: "text-green-400" },
                { name: "Workers de Mensageria", status: "Carga Alta", uptime: "99.95%", icon: Server, color: "text-orange-400" },
                { name: "Integração WhatsApp", status: "Operacional", uptime: "99.98%", icon: MessageCircle, color: "text-green-400" },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background-soft border border-border flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-foreground-muted" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{service.name}</div>
                      <div className="text-xs text-foreground-muted">Uptime: {service.uptime}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${service.color}`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">Atenção Necessária</div>
            <h4 className="font-medium mb-2">Pico de tráfego detectado</h4>
            <p className="text-sm text-foreground-muted mb-4">Os workers de mensageria estão operando acima de 80% da capacidade. Considere escalar os nós.</p>
            <Button size="sm" className="w-full bg-primary hover:bg-primary-hover text-white">
              Escalar Infraestrutura
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

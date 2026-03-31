import { Bot, Search, Filter, MoreVertical, Play, Pause, Activity } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ChatbotsView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-1">Gerenciamento de Chatbots</h2>
          <p className="text-foreground-muted">Monitore e administre todos os bots da plataforma.</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total de Bots", val: "8.492" },
          { title: "Bots Ativos", val: "6.104" },
          { title: "Mensagens (Hoje)", val: "1.2M" },
          { title: "Taxa de Conversão Média", val: "42%" },
        ].map((metric, i) => (
          <div key={i} className="bg-panel border border-border rounded-xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">{metric.title}</div>
            <div className="text-2xl font-semibold">{metric.val}</div>
          </div>
        ))}
      </div>

      {/* Filters & Table */}
      <div className="bg-panel border border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 items-center justify-between bg-background-soft/50">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted" />
            <input 
              type="text" 
              placeholder="Buscar por nome do bot ou dono..." 
              className="h-9 w-full bg-background border border-border rounded-md pl-9 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            <select className="h-9 bg-background border border-border rounded-md px-3 text-sm focus:outline-none focus:border-primary">
              <option>Todos os Status</option>
              <option>Ativos</option>
              <option>Pausados</option>
              <option>Rascunhos</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] uppercase tracking-wider text-foreground-muted bg-background-soft">
              <tr>
                <th className="px-6 py-4 font-semibold">Bot</th>
                <th className="px-6 py-4 font-semibold">Dono</th>
                <th className="px-6 py-4 font-semibold">Mensagens (24h)</th>
                <th className="px-6 py-4 font-semibold">Conversão</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: "Lançamento VIP", owner: "Iago de Freitas", msgs: "45.2k", conv: "68%", status: "Ativo" },
                { name: "Suporte Vendas", owner: "Maria Oliveira", msgs: "32.1k", conv: "42%", status: "Ativo" },
                { name: "Captação Lead", owner: "João Silva", msgs: "28.5k", conv: "55%", status: "Ativo" },
                { name: "Recuperação Carrinho", owner: "Pedro Santos", msgs: "15.8k", conv: "22%", status: "Pausado" },
                { name: "Atendimento Geral", owner: "Ana Costa", msgs: "5.2k", conv: "15%", status: "Ativo" },
                { name: "Pesquisa de Satisfação", owner: "Lucas Mendes", msgs: "0", conv: "0%", status: "Rascunho" },
              ].map((bot, i) => (
                <tr key={i} className="hover:bg-background-soft/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-panel-strong border border-border flex items-center justify-center">
                        <Bot className="w-4 h-4 text-foreground-muted" />
                      </div>
                      <div className="font-medium text-foreground">{bot.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground-muted">{bot.owner}</td>
                  <td className="px-6 py-4 font-mono text-xs">{bot.msgs}</td>
                  <td className="px-6 py-4 text-green-400 font-medium">{bot.conv}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium border ${
                      bot.status === 'Ativo' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                      bot.status === 'Pausado' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      'bg-foreground-muted/10 text-foreground-muted border-foreground-muted/20'
                    }`}>
                      {bot.status === 'Ativo' && <Activity className="w-3 h-3" />}
                      {bot.status === 'Pausado' && <Pause className="w-3 h-3" />}
                      {bot.status}
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
    </div>
  );
}

import { Users, Search, Filter, MoreVertical, UserPlus, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function UsersView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-1">Gerenciamento de Usuários</h2>
          <p className="text-foreground-muted">Visualize e gerencie as contas da plataforma.</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary-hover text-white">
          <UserPlus className="w-4 h-4" />
          Novo Usuário
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total de Usuários", val: "1.284", trend: "+12%", up: true },
          { title: "Novos (7 dias)", val: "142", trend: "+5%", up: true },
          { title: "Usuários Ativos", val: "892", trend: "-2%", up: false },
          { title: "Taxa de Churn", val: "2.4%", trend: "-0.5%", up: true },
        ].map((metric, i) => (
          <div key={i} className="bg-panel border border-border rounded-xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">{metric.title}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-semibold">{metric.val}</div>
              <div className={`flex items-center text-xs font-medium ${metric.up ? 'text-green-400' : 'text-red-400'}`}>
                {metric.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {metric.trend}
              </div>
            </div>
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
              placeholder="Buscar por nome, email ou ID..." 
              className="h-9 w-full bg-background border border-border rounded-md pl-9 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            <select className="h-9 bg-background border border-border rounded-md px-3 text-sm focus:outline-none focus:border-primary">
              <option>Todos os Planos</option>
              <option>Starter</option>
              <option>Pro</option>
              <option>Scale</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] uppercase tracking-wider text-foreground-muted bg-background-soft">
              <tr>
                <th className="px-6 py-4 font-semibold">Usuário</th>
                <th className="px-6 py-4 font-semibold">Plano</th>
                <th className="px-6 py-4 font-semibold">Bots</th>
                <th className="px-6 py-4 font-semibold">Cadastro</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: "Iago de Freitas", email: "iago@example.com", plan: "Pro", bots: 3, date: "12 Mar 2026", status: "Ativo" },
                { name: "João Silva", email: "joao@example.com", plan: "Starter", bots: 1, date: "10 Mar 2026", status: "Ativo" },
                { name: "Maria Oliveira", email: "maria@example.com", plan: "Enterprise", bots: 12, date: "05 Mar 2026", status: "Pendente" },
                { name: "Pedro Santos", email: "pedro@example.com", plan: "Pro", bots: 5, date: "01 Mar 2026", status: "Bloqueado" },
                { name: "Ana Costa", email: "ana@example.com", plan: "Starter", bots: 2, date: "28 Fev 2026", status: "Ativo" },
                { name: "Lucas Mendes", email: "lucas@example.com", plan: "Scale", bots: 8, date: "25 Fev 2026", status: "Ativo" },
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
                  <td className="px-6 py-4 text-foreground-muted">{user.date}</td>
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
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-foreground-muted">
          <div>Mostrando 1 a 6 de 1.284 usuários</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Anterior</Button>
            <Button variant="outline" size="sm">Próxima</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

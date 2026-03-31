import { Package, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ProductsView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-1">Produtos e Planos</h2>
          <p className="text-foreground-muted">Gerencie os planos de assinatura e ofertas.</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary-hover text-white">
          <Plus className="w-4 h-4" />
          Novo Plano
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "R$ 97", period: "/mês", users: "450", features: ["1 Bot", "1.000 Mensagens", "Suporte Básico"], color: "border-border" },
          { name: "Pro", price: "R$ 297", period: "/mês", users: "620", features: ["5 Bots", "10.000 Mensagens", "Suporte Prioritário", "Integrações"], color: "border-primary/50 bg-primary/5" },
          { name: "Scale", price: "R$ 997", period: "/mês", users: "214", features: ["Bots Ilimitados", "Mensagens Ilimitadas", "Gerente de Conta", "API Access"], color: "border-border" },
        ].map((plan, i) => (
          <div key={i} className={`bg-panel border rounded-2xl p-6 relative ${plan.color}`}>
            <div className="absolute top-4 right-4">
              <button className="p-1.5 rounded-md hover:bg-background-soft text-foreground-muted transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-sm text-foreground-muted">{plan.period}</span>
            </div>
            
            <div className="mb-6">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Assinantes Ativos</div>
              <div className="text-xl font-medium">{plan.users}</div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground-muted mb-2">Recursos</div>
              {plan.features.map((feat, j) => (
                <div key={j} className="text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  {feat}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 gap-2">
                <Edit className="w-4 h-4" /> Editar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

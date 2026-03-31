import { LineChart, BarChart3, PieChart, Download, Calendar, Activity } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ReportsView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-1">Relatórios Executivos</h2>
          <p className="text-foreground-muted">Análise de crescimento, receita e engajamento.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Últimos 30 Dias
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary-hover text-white">
            <Download className="w-4 h-4" />
            Exportar PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder 1 */}
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Crescimento de Receita (MRR)</h3>
            <LineChart className="w-5 h-5 text-foreground-muted" />
          </div>
          <div className="h-64 w-full bg-background-soft rounded-xl border border-border flex items-center justify-center flex-col gap-2">
            <LineChart className="w-8 h-8 text-foreground-muted/30" />
            <span className="text-sm text-foreground-muted">Gráfico de Linha (MRR)</span>
          </div>
        </div>

        {/* Chart Placeholder 2 */}
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Novos Usuários vs Churn</h3>
            <BarChart3 className="w-5 h-5 text-foreground-muted" />
          </div>
          <div className="h-64 w-full bg-background-soft rounded-xl border border-border flex items-center justify-center flex-col gap-2">
            <BarChart3 className="w-8 h-8 text-foreground-muted/30" />
            <span className="text-sm text-foreground-muted">Gráfico de Barras</span>
          </div>
        </div>

        {/* Chart Placeholder 3 */}
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Distribuição de Planos</h3>
            <PieChart className="w-5 h-5 text-foreground-muted" />
          </div>
          <div className="h-64 w-full bg-background-soft rounded-xl border border-border flex items-center justify-center flex-col gap-2">
            <PieChart className="w-8 h-8 text-foreground-muted/30" />
            <span className="text-sm text-foreground-muted">Gráfico de Pizza</span>
          </div>
        </div>

        {/* Chart Placeholder 4 */}
        <div className="bg-panel border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Engajamento de Bots</h3>
            <Activity className="w-5 h-5 text-foreground-muted" />
          </div>
          <div className="h-64 w-full bg-background-soft rounded-xl border border-border flex items-center justify-center flex-col gap-2">
            <Activity className="w-8 h-8 text-foreground-muted/30" />
            <span className="text-sm text-foreground-muted">Gráfico de Atividade</span>
          </div>
        </div>
      </div>
    </div>
  );
}

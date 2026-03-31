import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { 
  Settings, LogOut, Users, Bot, MessageSquare, DollarSign, 
  Activity, Database, Server, Search, MoreVertical, 
  LayoutDashboard, Package, LineChart, FileText, MessageCircle
} from "lucide-react";

import DashboardView from "./admin/DashboardView";
import UsersView from "./admin/UsersView";
import ChatbotsView from "./admin/ChatbotsView";
import ProductsView from "./admin/ProductsView";
import ReportsView from "./admin/ReportsView";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'users': return <UsersView />;
      case 'chatbots': return <ChatbotsView />;
      case 'products': return <ProductsView />;
      case 'reports': return <ReportsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex">
      
      {/* Sidebar */}
      <aside className="w-[280px] border-r border-border bg-background flex-col h-screen sticky top-0 overflow-y-auto p-4 hidden md:flex scrollbar-hide">
        
        {/* Brand */}
        <div className="flex items-center gap-3 mb-8 px-2 mt-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/20">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight leading-none">ChatTech</h1>
            <p className="text-[10px] text-red-400 uppercase tracking-widest font-bold mt-1">Admin Console</p>
          </div>
        </div>

        {/* Resumo Rápido */}
        <div className="border border-border rounded-2xl p-5 mb-6 bg-panel/30">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-4">Resumo Rápido</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-panel border border-border rounded-xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground-muted mb-1">Clientes Pagos</div>
              <div className="text-2xl font-semibold">2</div>
            </div>
            <div className="bg-panel border border-border rounded-xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground-muted mb-1">Bots</div>
              <div className="text-2xl font-semibold">1</div>
            </div>
            <div className="bg-panel border border-border rounded-xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground-muted mb-1">Leads</div>
              <div className="text-2xl font-semibold">1</div>
            </div>
            <div className="bg-panel border border-border rounded-xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground-muted mb-1">MRR</div>
              <div className="text-2xl font-semibold">US$0</div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-6 flex-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-4 rounded-xl p-3 transition-colors text-left ${activeTab === 'dashboard' ? 'bg-panel border border-border' : 'hover:bg-panel-soft border border-transparent'}`}
          >
            <LayoutDashboard className={`w-5 h-5 ${activeTab === 'dashboard' ? 'text-foreground-muted' : 'text-foreground-muted/70'}`} />
            <div className="flex-1">
              <div className={`text-sm font-semibold ${activeTab === 'dashboard' ? 'text-foreground' : 'text-foreground-muted'}`}>Dashboard</div>
              <div className="text-xs text-foreground-muted/70">Financeiro, crescimento</div>
            </div>
            <div className={`w-2 h-2 rounded-full bg-cyan-400 ${activeTab === 'dashboard' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>

          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-4 rounded-xl p-3 transition-colors text-left ${activeTab === 'users' ? 'bg-panel border border-border' : 'hover:bg-panel-soft border border-transparent'}`}
          >
            <Users className={`w-5 h-5 ${activeTab === 'users' ? 'text-foreground-muted' : 'text-foreground-muted/70'}`} />
            <div className="flex-1">
              <div className={`text-sm font-semibold ${activeTab === 'users' ? 'text-foreground' : 'text-foreground-muted'}`}>Usuários</div>
              <div className="text-xs text-foreground-muted/70">Contas, workspaces</div>
            </div>
            <div className={`w-2 h-2 rounded-full bg-cyan-400 ${activeTab === 'users' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>

          <button 
            onClick={() => setActiveTab('chatbots')}
            className={`w-full flex items-center gap-4 rounded-xl p-3 transition-colors text-left ${activeTab === 'chatbots' ? 'bg-panel border border-border' : 'hover:bg-panel-soft border border-transparent'}`}
          >
            <MessageSquare className={`w-5 h-5 ${activeTab === 'chatbots' ? 'text-foreground-muted' : 'text-foreground-muted/70'}`} />
            <div className="flex-1">
              <div className={`text-sm font-semibold ${activeTab === 'chatbots' ? 'text-foreground' : 'text-foreground-muted'}`}>Chatbots</div>
              <div className="text-xs text-foreground-muted/70">Biblioteca global</div>
            </div>
            <div className={`w-2 h-2 rounded-full bg-purple-400 ${activeTab === 'chatbots' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>

          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-4 rounded-xl p-3 transition-colors text-left ${activeTab === 'products' ? 'bg-panel border border-border' : 'hover:bg-panel-soft border border-transparent'}`}
          >
            <Package className={`w-5 h-5 ${activeTab === 'products' ? 'text-foreground-muted' : 'text-foreground-muted/70'}`} />
            <div className="flex-1">
              <div className={`text-sm font-semibold ${activeTab === 'products' ? 'text-foreground' : 'text-foreground-muted'}`}>Produtos</div>
              <div className="text-xs text-foreground-muted/70">Planos, links e oferta</div>
            </div>
            <div className={`w-2 h-2 rounded-full bg-orange-400 ${activeTab === 'products' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>

          <button 
            onClick={() => setActiveTab('reports')}
            className={`w-full flex items-center gap-4 rounded-xl p-3 transition-colors text-left ${activeTab === 'reports' ? 'bg-panel border border-border' : 'hover:bg-panel-soft border border-transparent'}`}
          >
            <LineChart className={`w-5 h-5 ${activeTab === 'reports' ? 'text-foreground-muted' : 'text-foreground-muted/70'}`} />
            <div className="flex-1">
              <div className={`text-sm font-semibold ${activeTab === 'reports' ? 'text-foreground' : 'text-foreground-muted'}`}>Relatórios</div>
              <div className="text-xs text-foreground-muted/70">Leitura executiva</div>
            </div>
            <div className={`w-2 h-2 rounded-full bg-yellow-400 ${activeTab === 'reports' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
        </nav>

        {/* System Status */}
        <div className="border border-green-500/20 bg-green-500/5 rounded-xl p-5 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-semibold text-green-500">Sistema online</span>
          </div>
          <p className="text-xs text-foreground-muted leading-relaxed">
            Use esse painel para acompanhar clientes, receita, operação e entrar rapidamente em qualquer chatbot.
          </p>
        </div>

        {/* Footer Button */}
        <Button variant="outline" className="w-full justify-center gap-2 h-11 bg-transparent border-border hover:bg-panel-soft" asChild>
          <Link to="/dashboard">
            <FileText className="w-4 h-4 text-foreground-muted" />
            <span className="text-foreground-muted font-medium">Voltar ao produto</span>
          </Link>
        </Button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 md:hidden">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-sm leading-tight">ChatTech</h1>
              <p className="text-[10px] text-red-400 uppercase tracking-widest font-medium">Admin Console</p>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Spacer for desktop header since brand is in sidebar conceptually, but we keep it clean */}
            <h2 className="font-semibold text-lg">
              {activeTab === 'dashboard' && 'Dashboard Financeiro'}
              {activeTab === 'users' && 'Usuários'}
              {activeTab === 'chatbots' && 'Chatbots'}
              {activeTab === 'products' && 'Produtos'}
              {activeTab === 'reports' && 'Relatórios'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted" />
              <input 
                type="text" 
                placeholder="Buscar usuário, bot ou ID..." 
                className="h-9 w-64 bg-panel border border-border rounded-md pl-9 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
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

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

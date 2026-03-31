import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, route to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 selection:bg-primary/30 relative">
      <div className="absolute top-6 left-6">
        <Button variant="ghost" asChild className="gap-2 text-foreground-muted hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-md bg-panel border border-border rounded-2xl p-8 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">Entrar</h1>
          <p className="text-sm text-foreground-muted">
            Não tem uma conta? <Link to="/register" className="text-primary hover:underline underline-offset-4">Registre-se gratuitamente</Link>
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Seu e-mail ou login" 
              required
              className="bg-background-soft border-border focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Input 
              type="password" 
              placeholder="Senha" 
              required
              className="bg-background-soft border-border focus-visible:ring-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-medium h-11">
            Entrar com senha
          </Button>
        </form>

        {/* Temporary Demo Buttons */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-foreground-muted text-center mb-4 uppercase tracking-wider font-semibold">
            Acesso Rápido (Demo)
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" asChild className="w-full text-xs h-10">
              <Link to="/dashboard">Área do Cliente</Link>
            </Button>
            <Button variant="outline" asChild className="w-full text-xs h-10">
              <Link to="/admin">Área Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

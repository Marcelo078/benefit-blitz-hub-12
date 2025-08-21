import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BH</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Benefit Blitz Hub</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};
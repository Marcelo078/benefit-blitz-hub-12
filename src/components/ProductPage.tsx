import { Product } from "@/types/product";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

interface ProductPageProps {
  product: Product;
}

export const ProductPage = ({ product }: ProductPageProps) => {
  useEffect(() => {
    document.title = product.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", product.metaDescription);
  }, [product]);

  const handleCtaClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-hero rounded-2xl mb-12 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {product.shortDescription}
            </p>
            <Button variant="hero" size="xl" onClick={handleCtaClick}>
              🔥 Quero Aproveitar Agora
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o {product.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.fullDescription}
              </p>
            </Card>

            {/* Benefits */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Principais Benefícios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* How to Use */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Como Usar</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.howToUse}
              </p>
            </Card>

            {/* Testimonials */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">O que nossos clientes dizem</h2>
              <div className="space-y-6">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <p className="text-muted-foreground italic">"{testimonial}"</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
              <div className="space-y-6">
                {product.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                    {index < product.faqs.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Differentials */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Diferenciais Exclusivos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.differentials.map((differential, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-foreground font-medium">{differential}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="p-6 bg-gradient-primary text-white sticky top-24">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  🎯 Oferta Especial
                </h3>
                <p className="mb-6 opacity-90">
                  Não perca esta oportunidade única de transformar sua vida!
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={handleCtaClick}
                >
                  🚀 Comprar Agora
                </Button>
                <p className="text-sm mt-4 opacity-75">
                  ✅ Entrega imediata
                  <br />
                  ✅ Suporte especializado
                  <br />
                  ✅ Garantia de satisfação
                </p>
              </div>
            </Card>

            {/* Category Card */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Categoria</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {product.category}
              </span>
            </Card>

            {/* Keywords */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Tags Relacionadas</h3>
              <div className="flex flex-wrap gap-2">
                {product.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 text-center py-12 bg-gradient-hero rounded-2xl text-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar sua transformação?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Junte-se aos milhares de pessoas que já transformaram suas vidas com o {product.name}
            </p>
            <Button variant="hero" size="xl" onClick={handleCtaClick}>
              💎 Quero Minha Transformação Agora
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
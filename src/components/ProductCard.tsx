import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-0">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground line-clamp-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {product.category}
          </span>
        </div>
        
        <div className="pt-2">
          <Link to={`/${product.id}`}>
            <Button variant="cta" className="w-full">
              Saiba Mais
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  discount?: string;
  rating?: number;
}

export const ProductCard = ({
  title,
  price,
  image,
  category,
  discount,
  rating = 0,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-border">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <div className="bg-price-badge text-white px-3 py-1 rounded font-bold text-lg shadow-md">
            ${price}
          </div>
        </div>
        {discount && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-discount-badge text-white font-bold">
              {discount}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[40px]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

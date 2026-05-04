import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
  return (
    <Link href={`/tiles-details/${tile.id}`}>
      <Card className="group border border-gray-200 hover:border-[#FF653F] hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white cursor-pointer h-full transform hover:-translate-y-2">
        <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
          <Image
            src={tile.image}
            alt={tile.title}
            width={600}
            height={600}
            className="rounded-2xl object-cover w-full aspect-square group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white font-semibold text-sm">View Details</p>
          </div>

          <Chip className="absolute top-4 right-4 bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white font-bold shadow-lg">
            {tile.category}
          </Chip>

          {tile.inStock === false && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold text-lg bg-black/70 px-6 py-3 rounded-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-[#0b0031] group-hover:text-[#FF653F] transition-colors truncate line-clamp-1">
              {tile.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {tile.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="space-y-2 border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                <strong className="text-[#0b0031]">Size:</strong>
              </span>
              <span className="font-semibold text-gray-700">{tile.dimensions}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                <strong className="text-[#0b0031]">Material:</strong>
              </span>
              <span className="font-semibold text-gray-700">{tile.material}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Price</p>
              <p className="text-2xl font-bold bg-linear-to-r from-[#FF653F] to-[#FF8555] bg-clip-text text-transparent">
                ${tile.price}
              </p>
            </div>
            <Button className="flex-1 bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg group-hover:gap-2">
              <span>Details</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TilesCard;
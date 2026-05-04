import { tilesData } from "@/lib/fetchData";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesDetailPage = async ({ params }) => {
  const { id } = await params;
  const tiles = await tilesData();
  const targetTiles = tiles.find((tile) => tile.id === id);

  if (!targetTiles) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-[#0b0031]">Tile not found</h1>
        <Link href={"/all-tiles"}>
          <Button className="mt-6 bg-[#FF653F] text-white">
            Back to Collection
          </Button>
        </Link>
      </div>
    );
  }

  // Get related tiles (same category)
  const relatedTiles = tiles
    .filter((tile) => tile.category === targetTiles.category && tile.id !== id)
    .slice(0, 4);

  return (
    <div className="py-12 md:py-20 px-2 space-y-16">
      {/* Back Link */}
      <Link href={"/all-tiles"} className="inline-flex items-center gap-2 text-[#FF653F] font-semibold hover:gap-3 transition-all">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Collection
      </Link>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
          <div className="relative w-full aspect-square">
            <Image
              src={targetTiles.image}
              alt={targetTiles.title}
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-3">
            <Chip className="bg-[#FF653F]/10 text-[#FF653F] font-semibold">
              {targetTiles.category}
            </Chip>
            <Chip className={targetTiles.inStock ? "bg-green-100 text-green-700 font-semibold" : "bg-red-100 text-red-700 font-semibold"}>
              {targetTiles.inStock ? "✓ In Stock" : "Out of Stock"}
            </Chip>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0b0031]">
              {targetTiles.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {targetTiles.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-[#FF653F]">
              ${targetTiles.price}
            </span>
            <span className="text-gray-500 text-lg">per piece</span>
          </div>

          {/* Specifications */}
          <div className="space-y-4 border-y border-gray-200 py-6">
            <h3 className="font-bold text-lg text-[#0b0031]">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-gray-600 text-sm">Dimensions</p>
                <p className="font-semibold text-[#0b0031]">{targetTiles.dimensions}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600 text-sm">Material</p>
                <p className="font-semibold text-[#0b0031]">{targetTiles.material}</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-[#0b0031]">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Premium durability and long-lasting finish</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Easy to clean and maintain</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Eco-friendly and sustainable materials</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#FF653F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Professional installation recommended</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              disabled={!targetTiles.inStock}
              className="flex-1 bg-[#FF653F] text-white font-semibold py-6 text-lg hover:bg-[#E55A35] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {targetTiles.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button className="flex-1 border-2 border-[#FF653F] text-[#FF653F] font-semibold py-6 text-lg hover:bg-[#FF653F]/10 transition-colors">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedTiles.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#0b0031]">
              Similar Tiles
            </h2>
            <p className="text-gray-600">
              Explore other beautiful tiles in the {targetTiles.category} category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTiles.map((tile) => (
              <Link key={tile.id} href={`/tiles-details/${tile.id}`}>
                <Card className="group border border-gray-200 hover:border-[#FF653F] hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                    <Image
                      src={tile.image}
                      alt={tile.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm text-[#0b0031] group-hover:text-[#FF653F] transition-colors truncate">
                      {tile.title}
                    </h3>
                    <p className="text-[#FF653F] font-bold text-sm">${tile.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TilesDetailPage;

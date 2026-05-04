import Search from "@/Components/AllTiles/Search";
import { tilesData } from "@/lib/fetchData";

const AllTilesPage = async () => {
  const tiles = await tilesData();

  return (
    <div className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF653F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF653F]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="space-y-6 text-center mb-16">
          <div className="inline-block">
            <span className="inline-block text-[#FF653F] font-bold text-sm tracking-widest uppercase bg-[#FF653F]/10 px-4 py-2 rounded-full">
               Complete Collection
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-[#0b0031] leading-tight">
              Discover Premium Tiles
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
              Explore our extensive collection of premium ceramic and porcelain tiles. Discover 
              the perfect tiles for any room with our curated selection of colors, patterns, 
              and finishes. From modern minimalist to classic elegant designs.
            </p>
          </div>

          {/* Collection Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF653F]">{tiles.length}+</p>
              <p className="text-gray-600 text-sm">Premium Designs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF653F]">20+</p>
              <p className="text-gray-600 text-sm">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF653F]">100%</p>
              <p className="text-gray-600 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <Search tiles={tiles} />
      </div>
    </div>
  );
};

export default AllTilesPage;
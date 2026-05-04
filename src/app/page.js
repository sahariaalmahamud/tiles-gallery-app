import Banner from "@/Components/HomePage/Banner/Banner";
import TilesCard from "@/Components/Ui/TilesCard";
import { tilesData } from "@/lib/fetchData";
import { Button } from "@heroui/react";
import Link from "next/link";

const HomePage = async () => {
  const tiles = await tilesData();

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Banner Section */}
      <section>
        <Banner />
      </section>

      {/* Featured Tiles Section */}
      <section id="featured" className="relative py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF653F]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF653F]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="inline-block text-[#FF653F] font-bold text-sm tracking-widest uppercase bg-[#FF653F]/10 px-4 py-2 rounded-full">
                ✨ Curated Selection
              </span>
            </div>
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#0b0031] leading-tight">
              Exceptional Tile <br /> Collections
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
              Handpicked premium tiles that represent the pinnacle of design and craftsmanship. 
              Each collection is meticulously curated to bring unparalleled elegance to your space.
            </p>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {tiles.slice(0, 4).map((tile, index) => (
              <div key={tile.id} className="group">
                <div className="relative opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                  <TilesCard tile={tile} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href={"/all-tiles"}>
              <Button className="bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white font-bold px-12 py-7 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg">
                Explore All Collections →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-linear-to-br from-[#0b0031] via-[#1a0047] to-[#0b0031] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF653F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF653F] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Our Tiles?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of quality, design, and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#FF653F]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FF653F]/50 transition-colors duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-[#FF653F] to-[#FF8555] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.8１.588-１.８１h3.46１a１ １ ０ ００.９５１-.６９l１.０７-３.２９２z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Meticulously crafted tiles that exceed international standards. Every piece undergoes rigorous quality control.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#FF653F]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FF653F]/50 transition-colors duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-[#FF653F] to-[#FF8555] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Design</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Curated by industry experts with decades of experience. Trends, colors, and patterns that define modern living.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#FF653F]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FF653F]/50 transition-colors duration-300">
                <div className="w-14 h-14 bg-linear-to-br from-[#FF653F] to-[#FF8555] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.16 5.314l4.897-.795 2.201 4.466 4.897-.795-2.201 4.466 2.201 4.466-4.897-.795-2.201 4.466-4.897-.795 2.201-4.466-2.201-4.466 4.897.795z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Exceptional Value</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Premium quality at competitive prices. Invest in tiles that last a lifetime while adding timeless elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Collections Banner */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#FF653F] via-[#FF8555] to-[#FFB88C] text-white shadow-2xl">
            {/* Decorative shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Discover This Season&apos;s <br /> Latest Designs
                </h3>
                <p className="text-lg opacity-90 max-w-lg">
                  Explore our newest collection featuring sustainable materials and innovative patterns that redefine modern aesthetics.
                </p>
              </div>
              <Link href={"/all-tiles"} className="shrink-0">
                <Button className="bg-white text-[#FF653F] font-bold px-8 py-4 text-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg">
                  Explore Now →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-[#FF653F] font-bold text-sm tracking-widest uppercase bg-[#FF653F]/10 px-4 py-2 rounded-full">
              ⭐ Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b0031]">Trusted by Thousands</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                text: "The quality and design of these tiles exceeded my expectations. My clients absolutely love them!",
              },
              {
                name: "Michael Chen",
                role: "Homeowner",
                text: "Best tiles I've ever purchased. The colors are vibrant and the durability is incredible. Highly recommend!",
              },
              {
                name: "Emma Williams",
                role: "Architect",
                text: "Working with Tiles Gallery has been seamless. Their team is knowledgeable and the product quality is outstanding.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FF653F] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-[#0b0031]">{testimonial.name}</p>
                  <p className="text-[#FF653F] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

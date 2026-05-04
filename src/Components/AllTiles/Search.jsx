"use client";

import { Button, Input } from "@heroui/react";
import React, { useState } from "react";
import TilesCard from "../Ui/TilesCard";

const Search = ({ tiles }) => {
  const [search, setSearch] = useState("");
  const [filteredTiles, setFilteredTiles] = useState(tiles);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(tiles.map((tile) => tile.category))];

  const handleSearchBtn = () => {
    let results = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory !== "All") {
      results = results.filter((tile) => tile.category === selectedCategory);
    }

    setFilteredTiles(results);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    let results = tiles;

    if (category !== "All") {
      results = results.filter((tile) => tile.category === category);
    }

    if (search) {
      results = results.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTiles(results);
  };

  const handleShowAll = () => {
    setFilteredTiles(tiles);
    setSearch("");
    setSelectedCategory("All");
  };

  return (
    <div className="space-y-10">
      {/* Search & Filter Section */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-bold text-[#0b0031] mb-3 uppercase tracking-wide">
                🔍 Search Tiles
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FF653F]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <Input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className="w-full text-lg pl-12"
                  placeholder="Search by name, pattern, or style..."
                  size="lg"
                />
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                onClick={handleSearchBtn}
                className="bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white font-bold py-3 px-8 hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 md:flex-initial rounded-lg"
              >
                Search
              </Button>
              <Button
                onClick={handleShowAll}
                className="border-2 border-[#FF653F] text-[#FF653F] font-bold py-3 px-8 hover:bg-[#FF653F] hover:text-white transition-all duration-300 flex-1 md:flex-initial rounded-lg"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <label className="block text-sm font-bold text-[#0b0031] mb-6 uppercase tracking-wide">
             Filter by Category
          </label>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white shadow-lg scale-105"
                    : "bg-gray-100 text-[#0b0031] hover:border-[#FF653F] border-2 border-transparent hover:bg-[#FF653F]/5"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex justify-between items-center bg-linear-to-r from-[#FF653F]/5 to-[#FF8555]/5 rounded-2xl p-6 border border-[#FF653F]/20">
        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">Results Found</p>
          <p className="text-2xl font-bold text-[#0b0031]">
            <span className="text-[#FF653F]">{filteredTiles.length}</span> of <span className="text-[#FF653F]">{tiles.length}</span> tiles
          </p>
        </div>
        {filteredTiles.length === 0 && (
          <Button
            onClick={handleShowAll}
            className="text-[#FF653F] font-bold hover:underline bg-transparent text-lg"
          >
            Clear filters →
          </Button>
        )}
      </div>

      {/* Tiles Grid */}
      {filteredTiles.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTiles.map((tile, index) => (
              <div key={tile.id} className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 50}ms` }}>
                <TilesCard tile={tile} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-24 bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-dashed border-gray-300">
          <div className="space-y-6">
            <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-700">No Tiles Found</h3>
              <p className="text-gray-600 text-lg">Try adjusting your search or filter criteria</p>
            </div>
            <Button
              onClick={handleShowAll}
              className="bg-linear-to-r from-[#FF653F] to-[#FF8555] text-white font-bold px-8 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
            >
              View All Tiles
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;


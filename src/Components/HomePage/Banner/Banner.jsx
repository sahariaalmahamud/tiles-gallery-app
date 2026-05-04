"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import BannerImg1 from "@/assets/b1.jpg";
import BannerImg2 from "@/assets/b2.jpg";
import BannerImg3 from "@/assets/b3.jpg";
import BannerImg4 from "@/assets/b4.jpg";
import BannerImg5 from "@/assets/b5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

const bannerImages = [
  BannerImg1,
  BannerImg2,
  BannerImg3,
  BannerImg4,
  BannerImg5,
];

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        speed={1200}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-[500px] md:h-[650px] lg:h-[700px]"
      >
        {bannerImages.map((img, i) => (
          <SwiperSlide key={i} className="relative group">
            <Image
              src={img}
              alt={`Banner slide ${i + 1}`}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              priority={i === 0}
            />
            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/30 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-50"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        <div className="text-center text-white max-w-4xl space-y-8">
          {/* Animated Badge */}
          <div className="inline-block animate-bounce">
            <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold px-6 py-2.5 rounded-full">
              Premium Tile Collections
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Elevate Your <br />
              <span className="bg-gradient-to-r from-[#FF653F] via-[#FF8555] to-[#FFB88C] bg-clip-text text-transparent">
                Space With Grace
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Discover our meticulously curated collection of premium ceramic and porcelain tiles. Each piece crafted to bring timeless elegance and unparalleled durability to your home.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Link href={"/all-tiles"}>
              <Button className="bg-gradient-to-r from-[#FF653F] to-[#FF8555] text-white font-bold px-10 py-7 text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 rounded-xl">
                <span>Explore Collections</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link href={"#featured"}>
              <Button className="border-2 border-white text-white font-bold px-10 py-7 text-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 rounded-xl backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>See Featured</span>
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 md:gap-16 pt-8 text-sm md:text-base">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-gray-300">Tile Designs</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">10K+</p>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">25+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF653F]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FF653F]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Banner;



import React from "react";

const Hero = () => {
    return (
        <section className="relative py-6  xl:py-10 px-4 ">
            <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
                <div className="relative bg-[#0A2259] rounded-4xl px-4 py-6 sm:px-8 sm:py-10 md:px-8 md:py-6 text-white overflow-hidden">
                    {/* Overlay background image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/hero-bg.webp"
                            alt=""
                            className="w-full h-full object-cover opacity-40 blur-xs rounded-2xl"
                        />
                    </div>
                    {/* Large "b" logo right side */}
                    <div className="absolute right-0 top-0 h-full flex items-center z-10">
                        <img
                            src="/images/round.webp"
                            alt="Bejan Singh Logo"
                            className="hidden lg:block h-32 sm:h-48 lg:h-full "
                        />
                    </div>
                    {/* Content */}
                    <div className="relative z-20 w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-xl xl:max-w-3xl">
                        <span className="block text-xs sm:text-sm font-medium mb-2 opacity-80">About us</span>
                        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight font-jakarta mt-4 xl:mt-6">
                            Trusted Tertiary Eye Care in South Tamil Nadu
                        </h2>
                        <p className="mt-4 text-xs sm:text-sm lg:text-sm xl:text-base font-inter opacity-90 leading-relaxed font-extralight text-justify">
                            <span className="font-bold">Bejan Singh Eye Hospital (P) Ltd</span>, established in 1992, is a tertiary eye care center and a recognized leader in comprehensive ophthalmology. With over 33 years of excellence, we have remained committed to delivering high-quality eye care services through innovation, expertise, and compassion. Each year, more than 3,50,000 patients choose our expert eye care team for specialized and reliable treatment.
                        </p>
                        <p className="mt-4 text-xs sm:text-sm lg:text-sm xl:text-base font-inter font-extralight opacity-90 leading-relaxed text-justify">
                            As a trusted name in vision care, we are equipped with state-of-the-art facilities and advanced technologies to provide world-class treatment for all types of eye conditions.
                        </p>
                    </div>
                </div>
                {/* Centered Section Below */}
                <div className="mt-8 text-left sm:text-end">
                    <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight font-jakarta mt-4 sm:mt-6 text-[#000625] ">
                        Center of Excellence in Ophthalmology
                    </h2>
                    <p className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl ml-auto pt-4 text-xs sm:text-sm lg:text-sm xl:text-base text-[#222] font-inter  sm:text-end text-justify ">
                        We take pride in being at the forefront of modern ophthalmology. Our hospital is home to super-specialty departments covering Retina, Glaucoma, Cataract, LASIK, Pediatric Ophthalmology, Cornea, Oculoplasty, and more. Whether it’s diagnosis or surgery, we ensure the highest level of expertise and personalized care.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

"use client";
import React, { useState, useEffect } from "react";

const OurJourney = () => {
    const timelineData = [
        { year: 2010, content: "Foundation of Bejan Singh Eye Hospital with a vision to provide world-class eye care." },
        { year: 2012, content: "Introduced advanced diagnostic equipment and expanded our services." },
        { year: 2015, content: "Established specialized departments for retina and cornea treatments." },
        { year: 2018, content: "Achieved ISO certification and international recognition for quality care." },
        { year: 2020, content: "Implemented telemedicine services during the pandemic era." },
        { year: 2021, content: "Opened new state-of-the-art surgical suites with latest technology." },
        { year: 2022, content: "Launched community outreach programs for rural eye care." },
        { year: 2023, content: "Introduced AI-powered diagnostic tools for early detection." },
        { year: 2024, content: "Expanded to multiple locations serving thousands of patients." },
        { year: 2025, content: "Continuing our mission with cutting-edge treatments and research." }
    ];

    const [activeIndex, setActiveIndex] = useState(6); // Start with 2021
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeDate = (direction: number) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        const newIndex = activeIndex + direction;
        
        if (newIndex >= 0 && newIndex < timelineData.length) {
            setActiveIndex(newIndex);
        }
        
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const goToDate = (index: number) => {
        if (isTransitioning || index === activeIndex) return;
        
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    // Get visible dates (current + 3 more)
    const getVisibleDates = () => {
        const start = Math.max(0, activeIndex - 1);
        const end = Math.min(timelineData.length, start + 4);
        return timelineData.slice(start, end).map((item, index) => ({
            ...item,
            originalIndex: start + index,
            isActive: start + index === activeIndex
        }));
    };

    const visibleDates = getVisibleDates();

    return (
        <section className="relative bg-[#000625] py-16 md:py-20 lg:py-24">
            <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Timeline Section */}
                    <div className="relative">
                        {/* Timeline Title */}
                        <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Timeline</h3>
                        
                        {/* Navigation Controls */}
                        <div className="absolute top-12 right-0 flex gap-2 z-20">
                            <button 
                                onClick={() => changeDate(-1)}
                                disabled={activeIndex === 0 || isTransitioning}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                                    activeIndex === 0 || isTransitioning
                                        ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                                        : 'bg-green-500 hover:bg-green-400 cursor-pointer hover:scale-110 shadow-lg'
                                }`}
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => changeDate(1)}
                                disabled={activeIndex === timelineData.length - 1 || isTransitioning}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                                    activeIndex === timelineData.length - 1 || isTransitioning
                                        ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                                        : 'bg-green-500 hover:bg-green-400 cursor-pointer hover:scale-110 shadow-lg'
                                }`}
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Vertical Line */}
                        <div className="absolute left-8 top-20 bottom-8 w-1 bg-gradient-to-b from-green-400 to-green-600"></div>

                        {/* Timeline Items */}
                        <div className={`mt-16 space-y-6 transition-all duration-300 ease-in-out ${
                            isTransitioning ? 'opacity-70' : 'opacity-100'
                        }`}>
                            {visibleDates.map((item, index) => (
                                <div 
                                    key={item.year}
                                    className={`relative flex items-center cursor-pointer transition-all duration-500 ease-in-out transform ${
                                        item.isActive
                                            ? 'scale-105 translate-x-2' 
                                            : 'scale-100 hover:scale-102'
                                    }`}
                                    onClick={() => goToDate(item.originalIndex)}
                                    style={{
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-6 w-4 h-4 rounded-full border-3 border-[#000625] z-10 transition-all duration-300 ${
                                        item.isActive
                                            ? 'bg-green-400 w-6 h-6 shadow-lg shadow-green-400/50 animate-pulse' 
                                            : 'bg-green-500 hover:bg-green-400'
                                    }`}></div>

                                    {/* Year and Content */}
                                    <div className="ml-16 w-full">
                                        <div className={`transition-all duration-300 ${
                                            item.isActive ? 'text-green-400' : 'text-white opacity-80'
                                        }`}>
                                            <span className={`font-bold block mb-1 ${
                                                item.isActive 
                                                    ? 'text-3xl md:text-4xl' 
                                                    : 'text-2xl md:text-3xl'
                                            }`}>
                                                {item.year}
                                            </span>
                                            <p className={`text-sm leading-relaxed transition-all duration-300 ${
                                                item.isActive 
                                                    ? 'text-gray-200 opacity-100' 
                                                    : 'text-gray-400 opacity-70'
                                            }`}>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-8 flex justify-center">
                            <div className="flex space-x-1">
                                {timelineData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToDate(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                            index === activeIndex 
                                                ? 'bg-green-400 w-6' 
                                                : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                            Our Journey
                        </h2>
                        <div className="space-y-6">
                            {/* Active Year Highlight */}
                            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {timelineData[activeIndex].year.toString().slice(-2)}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-400">
                                        {timelineData[activeIndex].year}
                                    </h3>
                                </div>
                                <p className="text-gray-200 leading-relaxed text-lg">
                                    {timelineData[activeIndex].content}
                                </p>
                            </div>

                            {/* General Description */}
                            <div className="space-y-4 text-gray-200 leading-relaxed">
                                <p>
                                    Bejan Singh Eye Hospital stands as a center of excellence in
                                    ophthalmic care, offering advanced diagnostic and treatment
                                    services across all eye care specialties. Our dedicated team of
                                    expert doctors and staff ensure that every patient receives
                                    attentive, personalized care in a safe and well-equipped
                                    environment.
                                </p>
                                <p>
                                    With a reputation built on trust, precision, and compassion, we
                                    are committed to delivering reliable, high-quality eye care that
                                    meets international standards. Whether it's routine eye exams
                                    or complex surgical procedures, patients choose us for our
                                    expertise, integrity, and unwavering focus on protecting and
                                    enhancing vision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;

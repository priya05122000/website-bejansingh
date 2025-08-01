import React from "react";

const OurTeam = () => {
    return (
        <section className="relative bg-[#010b41] ">
            <div className="bg-[#e8e8eb] w-full rounded-b-4xl md:rounded-b-[80px] lg:rounded-b-[100px] xl:rounded-b-[160px] px-6 sm:px-4">
                <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-0 md:px-4 lg:px-8 xl:px-0">
                    <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight font-jakarta pt-4 sm:pt-10 text-[#000625] ">
                        Our Team
                    </h2>
                    <img
                        src="/images/team.webp"
                        alt="Our Team"
                        className="w-full h-auto object-cover mt-4 sm:mt-6"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

import React from "react";

const WhatSetsUsApart = () => {
    return (
        <section className="relative pt-6  xl:pt-10 px-6 sm:px-4 pb-14 md:pb-20  lg:pb-28">
            <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-0 md:px-4 lg:px-8 xl:px-0 ">
                <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight font-jakarta pt-4 text-[#000625] ">
                    What Sets Us Apart
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
                    {/* Left: Image with overlay text */}
                    <div className="relative w-full lg:w-md xl:w-lg flex-shrink-0 ">
                        <img
                            src="/images/whatsets.webp"
                            alt="Eye Care Excellence"
                            className="w-full md:h-[500px] lg:h-full object-cover rounded-[40px] "
                        />
                        <div className="absolute bottom-0 right-0 max-w-52 md:max-w-72 px-0 ">
                            <div className="bg-[#53BE9073] rounded-br-[40px] px-6 py-6 backdrop-blur-sm">
                                <span className="text-white text-2xl md:text-3xl xl:text-4xl font-bold font-jakarta leading-tight block">
                                    Setting the<br />Standard in<br />Eye Care<br />Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Features */}
                    <div className="flex-1">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-bold text-sm md:text-base lg:text-sm  xl:text-base font-inter mb-1">Established Brand</h2>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter">
                                    With over three decades of experience, Bejan Singh Eye Hospital has become a well-recognized and respected name in the field of ophthalmology.
                                </p>
                            </div>
                            <hr className="my-3 xl:my-5 border-[#00000033]" />
                            <div>
                                <h2 className="font-bold text-sm md:text-base lg:text-sm  xl:text-base font-inter mb-1">Expert Medical Team</h2>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-s  font-inter">
                                    Our hospital is staffed with a highly qualified team of ophthalmologists, optometrists, nurses, and technicians dedicated to providing personalized and effective treatments.
                                </p>
                            </div>
                            <hr className="my-2 xl:my-5 border-[#00000033]" />
                            <div>
                                <h2 className="font-bold text-sm md:text-base lg:text-sm  xl:text-base font-inter mb-1">Integrated Eye Care Model</h2>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter mb-2">
                                    We operate a seamless care ecosystem that includes:
                                </p>
                                <ul className="list-disc ml-6 text-xs md:text-sm lg:text-xs xl:text-sm  font-inter">
                                    <li>Tertiary hospital</li>
                                    <li>Vision centers</li>
                                    <li>Opticals</li>
                                    <li>Academic and research institutions</li>
                                </ul>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter mt-2">
                                    This integrated approach ensures continuity of care from diagnosis to recovery.
                                </p>
                            </div>
                            <hr className="my-3 xl:my-5 border-[#00000033]" />
                            <div>
                                <h2 className="font-bold text-sm md:text-base lg:text-sm  xl:text-base font-inter mb-1">Advanced Technology & Infrastructure</h2>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter">
                                    We are equipped with state-of-the-art diagnostic and surgical equipment, some of which are exclusive to our facility in this region. Patients receive complete treatment in one location, eliminating the need for referrals or additional travel.
                                </p>
                            </div>
                            <hr className="my-3 xl:my-5 border-[#00000033]" />
                            <div>
                                <h2 className="font-bold text-sm md:text-base lg:text-sm  xl:text-base font-inter mb-1">Innovation and Community Outreach</h2>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter mb-2">
                                    We are deeply committed to social responsibility and digital transformation:
                                </p>
                                <ul className="list-disc ml-6 text-xs md:text-sm lg:text-xs xl:text-sm  font-inter">
                                    <li>Over 500+ free eye camps and school screenings conducted</li>
                                    <li>Mobile eye care units for underserved communities</li>
                                    <li>Partnerships with government and NGOs for rural outreach</li>
                                </ul>
                                <p className="text-xs md:text-sm lg:text-xs xl:text-sm  font-inter mt-2">
                                    Adoption of digital health technologies to expand our impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatSetsUsApart;

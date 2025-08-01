import React from "react";

const WhatSetsUsApart = () => {
    return (
        <section className="relative py-8 px-2 md:px-0 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold font-jakarta text-[#0A2259] mb-10 border-b-0">What Sets Us Apart</h1>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Image with overlay text */}
                    <div className="relative w-full lg:w-[480px] flex-shrink-0">
                        <img
                            src="/images/whatsets.webp"
                            alt="Eye Care Excellence"
                            className="w-full h-[480px] object-cover rounded-[40px] border border-[#53BE90]"
                        />
                        <div className="absolute bottom-0 left-0 w-full px-0">
                            <div className="bg-gradient-to-r from-[#53BE90] to-[#2DC6A7] rounded-b-[40px] px-8 py-8">
                                <span className="text-white text-2xl md:text-3xl font-bold font-jakarta leading-tight block">
                                    Setting the<br />Standard in<br />Eye Care<br />Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Features */}
                    <div className="flex-1">
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-bold text-base md:text-lg font-inter mb-1">Established Brand</h2>
                                <p className="text-sm md:text-base font-inter">
                                    With over three decades of experience, Bejan Singh Eye Hospital has become a well-recognized and respected name in the field of ophthalmology.
                                </p>
                            </div>
                            <hr className="my-2 border-[#E5E7EB]" />
                            <div>
                                <h2 className="font-bold text-base md:text-lg font-inter mb-1">Expert Medical Team</h2>
                                <p className="text-sm md:text-base font-inter">
                                    Our hospital is staffed with a highly qualified team of ophthalmologists, optometrists, nurses, and technicians dedicated to providing personalized and effective treatments.
                                </p>
                            </div>
                            <hr className="my-2 border-[#E5E7EB]" />
                            <div>
                                <h2 className="font-bold text-base md:text-lg font-inter mb-1">Integrated Eye Care Model</h2>
                                <p className="text-sm md:text-base font-inter mb-2">
                                    We operate a seamless care ecosystem that includes:
                                </p>
                                <ul className="list-disc ml-6 text-sm md:text-base font-inter">
                                    <li>Tertiary hospital</li>
                                    <li>Vision centers</li>
                                    <li>Opticals</li>
                                    <li>Academic and research institutions</li>
                                </ul>
                                <p className="text-sm md:text-base font-inter mt-2">
                                    This integrated approach ensures continuity of care from diagnosis to recovery.
                                </p>
                            </div>
                            <hr className="my-2 border-[#E5E7EB]" />
                            <div>
                                <h2 className="font-bold text-base md:text-lg font-inter mb-1">Advanced Technology & Infrastructure</h2>
                                <p className="text-sm md:text-base font-inter">
                                    We are equipped with state-of-the-art diagnostic and surgical equipment, some of which are exclusive to our facility in this region. Patients receive complete treatment in one location, eliminating the need for referrals or additional travel.
                                </p>
                            </div>
                            <hr className="my-2 border-[#E5E7EB]" />
                            <div>
                                <h2 className="font-bold text-base md:text-lg font-inter mb-1">Innovation and Community Outreach</h2>
                                <p className="text-sm md:text-base font-inter mb-2">
                                    We are deeply committed to social responsibility and digital transformation:
                                </p>
                                <ul className="list-disc ml-6 text-sm md:text-base font-inter">
                                    <li>Over 500+ free eye camps and school screenings conducted</li>
                                    <li>Mobile eye care units for underserved communities</li>
                                    <li>Partnerships with government and NGOs for rural outreach</li>
                                </ul>
                                <p className="text-sm md:text-base font-inter mt-2">
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

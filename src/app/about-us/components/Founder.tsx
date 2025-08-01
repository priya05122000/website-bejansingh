import React from "react";

const Founder = () => {
    return (
        <section className="relative py-6  xl:py-10 px-4 ">
            <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-8xl font-bold font-jakarta   mb-10">Founder</h2>
                {/* Founder 1 */}
                <div className="">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-[#0000220F] rounded-[50px] p-8  mb-10  w-full max-w-5xl ml-14 relative">
                        <div className="flex-shrink-0">
                            <img
                                src="/images/doctor-1.webp"
                                alt="Dr. Bejan Singh"
                                className="w-64 h-96 object-cover absolute transform -translate-x-1/3 translate-y-0"
                            />
                            {/* <div className="bg-[#53BE9073] text-white text-lg font-semibold rounded-b-lg px-4 py-2 text-center -mt-2 shadow-md">
                            Dr. Bejan Singh
                        </div> */}
                        </div>
                        <div className="flex-1 ml-44">
                            <p className="text-sm font-inter leading-loose">
                                Completed his <span className="font-bold">Master’s in Ophthalmology</span>. Received the <span className="font-bold">Rtn Dr. P.N. Srinivasa Rao Award for Best Outgoing Student.</span> Began his career as a <span className="font-bold">Lecturer in Ophthalmology at Kasturba Medical College</span>. Also served as <span className="font-bold">Assistant Surgeon at the OEU Institute of Ophthalmology, Manipal, for one year.</span> Returned to his native place and <span className="font-bold">joined Neyyoor C.S.I. Mission Hospital in 1983.</span> In 1985, became <span className="font-bold">Project Director and Chief Ophthalmologist of Neyyoor Eye Services</span>. Neyyoor Eye Services is a comprehensive eye care system under the Kanyakumari Medical Mission, in collaboration with Christoffel Blinden Mission, West Germany.
                            </p>
                            <span className="block mt-2 text-sm font-inter">Played key roles in expanding eye care services to:</span>
                            <ul className="list-disc ml-6 font-bold mt-2">
                                <li>Kalashetram</li>
                                <li>Kumarakom</li>
                                <li>Kanyakumari</li>
                            </ul>
                            <p className="text-sm font-inter leading-loose mt-2">
                                In 1987, underwent super-specialized training in Cataract Surgery with Lens Implant at Upson Eye Clinic, USA.
                            </p>
                        </div>
                    </div>
                    {/* Founder 2 */}
                    <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-start bg-[#0000220F] rounded-[50px] p-6 md:p-10  relative max-w-5xl ml-auto">
                        <div className="flex-shrink-0">
                            <img
                                src="/images/doctor-2.webp"
                                alt="Dr. Rooshitha B. Singh"
                                className="w-56 h-56 object-cover rounded-lg border border-[#2DC6A7]"
                            />
                            <div className="bg-[#2DC6A7] text-white text-lg font-semibold rounded-b-lg px-4 py-2 text-center -mt-2 shadow-md">
                                Dr. Bejan Singh
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg md:text-xl font-bold text-[#0A2259] mb-2">Dr. Rooshitha B. Singh</h2>
                            <p className="text-sm  font-inter leading-relaxed">
                                Earned her MBBS degree from Stanley Medical College, Chennai. Completed her D.O. (Diploma in Ophthalmology) from Madurai Medical College. Holds a Hospital Management degree from Manonmaniam Sundaranar University. After her postgraduation in Ophthalmology, she joined her husband Dr. Bejan Singh at Neyyoor, working with Kanyakumari Medical Mission as a Junior Ophthalmologist.
                            </p>
                        </div>
                        {/* Circular text */}
                        <div className="absolute right-6 bottom-6 hidden md:block pointer-events-none select-none">
                            <svg width="180" height="180" viewBox="0 0 180 180">
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M90,10
                                    a80,80 0 1,1 0,160
                                    a80,80 0 1,1 0,-160"
                                    />
                                </defs>
                                <text fill="#2DC6A7" fontSize="16" fontFamily="inherit">
                                    <textPath href="#circlePath" startOffset="0">
                                        Bejan Singh Eye Hospital • Established in 1991 •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Founder;

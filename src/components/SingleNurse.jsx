import React from "react";

export default function SingleNurse() {
    return (
        <div>

            <div className="min-h-screen  flex items-center justify-center px-6 py-16">
                <div className="max-w-6xl bg-white rounded-3xl  flex flex-col md:flex-row overflow-hidden">

                    <div className="md:w-1/3  flex items-center justify-center p-6">

                        <img
                            src="https://img.freepik.com/free-photo/male-doctor-hospital_23-2148827774.jpg "
                            alt="no"
                            className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12 text-[#03045e]">
                        <span className="inline-block bg-[#0077b6] text-white px-4 py-1 rounded-full text-sm mb-4">
                            Senior Cardiologist & Heart Health Specialist
                        </span>

                        <h1 className="text-3xl font-bold mb-6">
                            Dr. Aamir Collins, MD, FACC
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6 mb-8 text-[#03045e] font-semibold">
                            <div>
                                <p className="text-gray-600 font-normal">Heritage</p>
                                <p>UAE – UK Mixed Descent</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-normal">Experience</p>
                                <p>18+ Years in Advanced Cardiology Care</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-normal">Languages</p>
                                <p>English – Arabic – Basic Japanese</p>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-3">Professional Summary</h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Dr. Aamir Collins, MD, FACC is a board-certified cardiologist specializing in cardiovascular disease prevention, interventional cardiology, and long-term heart health management. With over 18 years of clinical experience across leading hospitals in London, Dubai, and Singapore, he blends precision, compassion, and evidence-based expertise to deliver world-class cardiac care. His approach focuses on early detection, minimally invasive procedures, and tailored treatment plans that prioritize patient safety, comfort, and long-term wellness.
                        </p>


                    </div>

                </div>

            </div>
            <div className="min-h-screen bg-[#e6f5fd] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
                <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">

                    
                    <div className="lg:w-1/2 relative order-1 lg:order-2 min-h-[240px] sm:min-h-[320px] lg:min-h-full">
                        <img
                            src="https://askit.dextheme.net/medizin/wp-content/uploads/sites/46/2025/11/7CH5V26.jpg"
                            alt="Doctor with patient"
                            className="w-full h-full object-cover"
                        />

                        
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-[#03045e] text-white rounded-xl px-1 sm:px-5 py-3 flex items-center gap-3 shadow-lg">
                            <div className="flex  -space-x-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User 1"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="User 2"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/56.jpg"
                                    alt="User 3"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <span className="font-semibold text-sm whitespace-nowrap fs-20">
                                Chosen by 1.5k+ Families
                            </span>
                        </div>
                    </div>

                    
                    <div className="lg:w-1/2 order-2 lg:order-1 p-6 sm:p-10 lg:p-16">
                        <button className="border border-blue-600 text-blue-600 rounded-full px-5 py-1 text-sm font-semibold mb-4 hover:bg-blue-50 transition">
                            Contact Us
                        </button>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#03045e] mb-8">
                            Make Appointment
                        </h2>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Your Real Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Select Services
                                </label>
                                <select
                                    className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Pediatrics</option>
                                    <option>Orthopedics</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:col-span-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Additional Details
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write details here"
                                    className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="bg-[#0077b6] text-white font-semibold rounded-lg px-8 py-4 w-full hover:bg-[#005f8a] transition"
                                >
                                    Make Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
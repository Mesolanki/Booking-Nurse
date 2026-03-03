import React from 'react'

const Error = () => {
    return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
                <div className="text-center">


                    <h1 className="text-8xl font-bold " style={{ color: "#047dd8" }} >
                        404
                    </h1>


                    <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                        Page Not Found, But We Are
                    </h2>


                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                        Don’t worry! our care team is always available.
                        Let us guide you back to the right information you’re looking for.
                    </p>


                    <div className="mt-8">
                        <button
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold px-6 py-3 rounded-lg shadow-md 
                       transition duration-300"
                        >
                            Back to Home
                            <span className="text-xl font-bold">+</span>
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default Error

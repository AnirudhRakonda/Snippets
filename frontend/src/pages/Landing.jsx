import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1e1e1e] relative overflow-hidden">
            {/* Custom Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-purple-600 to-pink-600 opacity-40 blur-3xl"></div>

            <h1 className="text-4xl font-bold text-center text-white z-10">
                Your Personal Hub for Code Snippets & Algorithms
            </h1>
            <p className="text-lg text-center mt-4 mb-4 text-white z-10">
                Organize, store, and share code solutions with ease. Collaborate and learn with developers around the globe.
            </p>

            <button
                onClick={() => navigate("/auth")}
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e1e1e] transition z-10"
            >
                Sign In
            </button>
        </div>
    );
};

export default Landing;

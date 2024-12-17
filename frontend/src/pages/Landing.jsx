// src/pages/landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex  flex-col items-center justify-center h-screen bg-Background text-gray-200">
           
                <h1 class="text-4xl w-[1200px] font-bold text-center mb-8">
                    Your Personal Hub for Code Snippets & Algorithms
                </h1>
                <p class="text-[18px] w-1/2 text-center mt-4 mb-12">
                    Organize, store, and share code solutions with ease. Collaborate and learn with developers around the globe.
                </p>
                

                <button
                    onClick={() => navigate("/auth")}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e1e1e] transition"
                >
                    Sign In
                </button>
            
        </div>
    );
};

export default Landing;

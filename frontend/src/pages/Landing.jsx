// src/pages/landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-Background text-white">
            <h1 class="text-4xl font-bold text-center">
                Your Personal Hub for Code Snippets & Algorithms
            </h1>
            <p class="text-lg text-center mt-4 mb-4">
                Organize, store, and share code solutions with ease. Collaborate and learn with developers around the globe.
            </p>
            

            <button
                onClick={() => navigate("/auth")}
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-bac transition"
            >
                Sign In
            </button>
        </div>
    );
};

export default Landing;

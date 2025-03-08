import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Project! 🎉</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        This project is built using modern web technologies. Explore the features,
        learn more about our mission, and enjoy the experience!
      </p>
      <div className="flex justify-center">
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;

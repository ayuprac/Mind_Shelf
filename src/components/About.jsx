import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome to Mind📖<span className="text-blue-600">Shelf</span> — Your Knowledge Partner
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10">
          MindShelf is your modern online bookstore crafted for curious readers, lifelong learners, and passionate thinkers.
          We bring an intuitive, elegant, and user-friendly platform where discovering books feels effortless and enjoyable.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">📘 How to Use MindShelf</h2>

        <div className="space-y-6 text-gray-800 dark:text-gray-200 text-base leading-relaxed">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">🌟 Explore Freely</h3>
            <p>Head over to the <span className="font-semibold text-blue-500">Free Browse Section</span> and start exploring books — no signup needed.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">🌟 Buy Books with Ease</h3>
            <p>Like what you see? Purchase directly from the free section without creating an account.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">🌟 Access Premium Features</h3>
            <p>
              Tap into the <span className="font-semibold text-blue-500">Premium Section</span>. Sign up or log in to unlock:
              <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                <li>Early access to bestsellers</li>
               
                <li>Premium-only discounts & curated collections</li>
              </ul>
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-1">🌟 Keep Reading, Keep Growing</h3>
            <p>Build your personal digital shelf and return anytime to continue your journey of discovery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

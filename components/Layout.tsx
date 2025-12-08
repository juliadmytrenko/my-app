import React from "react";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 text-gray-800 relative overflow-hidden">
      {/* Animated starry background */}
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        {/* <div className="clouds"></div> */}
      </div>

      <div className="fixed bottom-0 left-0 z-10 pointer-events-none">
        <div className="relative">
          <Image
            src="/images/deku.png"
            alt="Wooden Mask"
            width={200}
            height={200}
            className="absolute bottom-0 left-0"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-pink-100/80 via-purple-100/60 to-transparent"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-10 pointer-events-none">
        <Image
          src="/images/jiggly.png"
          alt="Jigglypuff"
          width={200}
          height={200}
          style={{
            mixBlendMode: "normal",
            background: "transparent",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 relative z-10">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full px-8 py-4 shadow-lg mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg">
              ✨ Julia's Tech Blog ✨
            </h1>
          </div>
          <p className="text-lg text-purple-700 font-medium mt-4">
            Projects • Notes • Learning Journey
          </p>
        </header>

        {/* Main content */}
        <main className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 mb-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-pink-300 text-center">
          <p className="text-sm text-purple-600 font-medium">
            © {new Date().getFullYear()} Julia Dmytrenko ✨
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

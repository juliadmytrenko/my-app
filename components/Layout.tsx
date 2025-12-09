import React from "react";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 text-purple-900 relative overflow-hidden">
      {/* Animated starry background */}
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        {/* <div className="clouds"></div> */}
      </div>

      {/* <div className="fixed bottom-0 left-0 z-10 pointer-events-none">
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
      </div> */}

      <div className="fixed bottom-0 left-0 z-10 pointer-events-none hidden sm:block">
        <Image
          src="/images/jigglypuff2.png"
          alt="Jigglypuff 2"
          width={150}
          height={150}
          className="sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
          style={{
            mixBlendMode: "normal",
            background: "transparent",
          }}
        />
      </div>

      <div className="fixed bottom-0 right-0 z-10 pointer-events-none hidden sm:block">
        <Image
          src="/images/jiggly.png"
          alt="Jigglypuff"
          width={150}
          height={150}
          className="sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
          style={{
            mixBlendMode: "normal",
            background: "transparent",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 relative z-10">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg">
              ✨ Julia's Tech Blog ✨
            </h1>
          </div>
          <nav className="mt-4 text-sm sm:text-base md:text-lg flex flex-wrap justify-center gap-2 sm:gap-0">
            <a
              href="/"
              className="text-purple-600 hover:text-pink-500 font-semibold transition-colors no-underline hover:underline"
            >
              Projects
            </a>
            <span className="text-purple-400 mx-2 hidden sm:inline">•</span>
            <a
              href="/"
              className="text-purple-600 hover:text-pink-500 font-semibold transition-colors no-underline hover:underline"
            >
              Notes
            </a>
            <span className="text-purple-400 mx-2 hidden sm:inline">•</span>
            <a
              href="/learning-journey"
              className="text-purple-600 hover:text-pink-500 font-semibold transition-colors no-underline hover:underline"
            >
              Learning Journey
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main className="bg-white backdrop-blur rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8">
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

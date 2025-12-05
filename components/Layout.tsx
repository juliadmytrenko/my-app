import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-center">
            Julia's Tech Blog
          </h1>
          <p className="text-center mt-2 text-gray-600">
            Projects • Notes • Learning Journey
          </p>
        </header>

        <main>{children}</main>

        <footer className="mt-16 pt-8 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Julia Dmytrenko
        </footer>
      </div>
    </div>
  );
};

export default Layout;

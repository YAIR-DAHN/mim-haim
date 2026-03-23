'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              מכירת חמץ אונליין
            </Link>
          </div>
          
          {/* תפריט למסכים גדולים */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
              דף הבית
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
              אודות
            </Link>
            <Link href="/form" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
              טופס מכירה
            </Link>
          </div>
          
          {/* תפריט למכשירים ניידים */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
              aria-label="תפריט"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* תפריט נפתח למכשירים ניידים */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-blue-50 rounded-md">
              דף הבית
            </Link>
            <Link href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-blue-50 rounded-md">
              אודות
            </Link>
            <Link href="/form"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-center text-gray-700 hover:bg-blue-50 rounded-md">
              טופס מכירה
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 
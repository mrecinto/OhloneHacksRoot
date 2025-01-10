import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            Ohlone Hacks 2025
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  if (!showNav) {
    return children;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-secondary/50 backdrop-blur-md border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary-foreground">M</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">MangaHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/trending"
              className={`text-sm font-medium transition-colors ${
                isActive('/trending') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Trending
            </Link>
            <Link
              to="/library"
              className={`text-sm font-medium transition-colors ${
                isActive('/library') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Perpustakaan
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <Search size={20} className="text-muted-foreground" />
            </button>
            <Link
              to="/profile"
              className={`p-2 rounded-lg transition-colors ${
                isActive('/profile') ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-muted bg-secondary/80 backdrop-blur">
            <nav className="flex flex-col gap-2 p-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/trending"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Trending
              </Link>
              <Link
                to="/library"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Perpustakaan
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="min-h-[calc(100vh-80px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-muted py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 MangaHub. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

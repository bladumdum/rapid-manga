import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function Reader() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const chapter = searchParams.get('chapter') || '200';
  const [showMenu, setShowMenu] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 45;

  const pages = Array.from({ length: totalPages }, (_, i) => ({
    number: i + 1,
    url: `linear-gradient(135deg, hsl(${200 + i * 2} 70% 50%) 0%, hsl(${240 + i * 2} 70% 50%) 100%)`,
  }));

  const currentPageData = pages[currentPage - 1];

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Menu Bar */}
      {showMenu && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-md border-b border-muted">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              to={`/manga/${id}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
              <span className="font-semibold hidden sm:inline">Back to Details</span>
            </Link>

            <div className="text-center">
              <p className="font-semibold">Chapter {chapter}</p>
              <p className="text-xs text-muted-foreground">Page {currentPage} of {totalPages}</p>
            </div>

            <button
              onClick={() => setShowMenu(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Menu Button */}
      {!showMenu && (
        <button
          onClick={() => setShowMenu(true)}
          className="fixed top-4 right-4 z-40 p-2 bg-secondary/80 backdrop-blur hover:bg-secondary rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main Reader Area */}
      <div className={`flex flex-col items-center justify-center min-h-screen ${showMenu ? 'pt-16' : ''}`}>
        {/* Image Viewer */}
        <div className="w-full flex items-center justify-center bg-black/30 py-4 px-2">
          <div
            className="w-full max-w-3xl aspect-[3/4] md:aspect-auto md:h-[calc(100vh-100px)] rounded-lg shadow-2xl"
            style={{ background: currentPageData.url }}
          />
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-md border-t border-muted">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary border border-muted rounded-lg hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Page selector */}
            <div className="flex-1 flex items-center justify-center gap-2">
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                  }
                }}
                className="w-16 px-2 py-2 bg-muted border border-muted rounded text-center text-foreground"
              />
              <span className="text-sm text-muted-foreground">/ {totalPages}</span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Reading Tips Modal */}
        {showMenu && (
          <div className="fixed bottom-24 right-4 bg-card border border-muted rounded-lg p-4 w-64 shadow-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Tips Membaca
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Gunakan panah kiri/kanan untuk navigasi</li>
              <li>• Masukkan nomor halaman untuk loncat</li>
              <li>• Tekan M untuk toggle menu</li>
              <li>• Setiap halaman memberikan +1 poin</li>
            </ul>
          </div>
        )}
      </div>

      {/* Keyboard shortcuts hint */}
      <style>{`
        body { overflow: hidden; }
      `}</style>
    </div>
  );
}

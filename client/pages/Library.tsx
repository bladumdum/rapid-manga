import Layout from '@/components/Layout';
import { BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface LibraryItem {
  id: number;
  title: string;
  chapters: number;
  lastRead: string;
  progress: number;
  image: string;
}

const libraryItems: LibraryItem[] = [
  {
    id: 1,
    title: 'Solo Leveling',
    chapters: 45,
    lastRead: '2 hari yang lalu',
    progress: 100,
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 2,
    title: 'Demon Slayer',
    chapters: 35,
    lastRead: '1 minggu yang lalu',
    progress: 87,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Tower of God',
    chapters: 28,
    lastRead: 'Kemarin',
    progress: 65,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Blue Exorcist',
    chapters: 20,
    lastRead: '3 hari yang lalu',
    progress: 45,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 5,
    title: 'The Gamer',
    chapters: 15,
    lastRead: '5 hari yang lalu',
    progress: 38,
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    id: 6,
    title: 'Noblesse',
    chapters: 12,
    lastRead: '1 bulan yang lalu',
    progress: 25,
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = libraryItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-12 bg-gradient-to-b from-secondary to-background">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={32} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Perpustakaan Saya</h1>
          </div>

          {/* Search Bar */}
          <div className="max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Cari komik di perpustakaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Koleksi</p>
              <p className="text-3xl font-bold">{libraryItems.length}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Dibaca</p>
              <p className="text-3xl font-bold">
                {libraryItems.reduce((sum, item) => sum + item.chapters, 0)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Rata-rata Progress</p>
              <p className="text-3xl font-bold">
                {Math.round(libraryItems.reduce((sum, item) => sum + item.progress, 0) / libraryItems.length)}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Library Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/manga/${item.id}`}
                  className="flex gap-4 bg-card rounded-lg p-4 border border-muted hover:border-primary transition-colors group"
                >
                  {/* Cover */}
                  <div
                    className="w-32 h-44 rounded flex-shrink-0 group-hover:shadow-lg transition-shadow"
                    style={{ background: item.image }}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.chapters} chapters • Dibaca {item.lastRead}
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{item.progress}% selesai</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center">
                    <button className="btn-primary px-6 py-2 text-sm whitespace-nowrap">
                      Lanjut Baca
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Tidak ada komik yang cocok dengan pencarian</p>
              <Link to="/trending" className="btn-primary inline-block">
                Jelajahi Koleksi
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

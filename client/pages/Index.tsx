import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Star, Flame, TrendingUp } from 'lucide-react';

interface Manga {
  id: number;
  title: string;
  genre: string;
  rating: number;
  views: number;
  image: string;
  status: 'ongoing' | 'completed';
  chapters: number;
}

const trendingManga: Manga[] = [
  {
    id: 1,
    title: 'Blue Exorcist',
    genre: 'Action, Supernatural',
    rating: 8.5,
    views: 125000,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    status: 'ongoing',
    chapters: 145,
  },
  {
    id: 2,
    title: 'Demon Slayer',
    genre: 'Action, Fantasy',
    rating: 9.2,
    views: 256000,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    status: 'completed',
    chapters: 205,
  },
  {
    id: 3,
    title: 'Tower of God',
    genre: 'Adventure, Fantasy',
    rating: 8.8,
    views: 189000,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    status: 'ongoing',
    chapters: 612,
  },
  {
    id: 4,
    title: 'Solo Leveling',
    genre: 'Action, Fantasy',
    rating: 9.1,
    views: 342000,
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    status: 'completed',
    chapters: 200,
  },
  {
    id: 5,
    title: 'The Gamer',
    genre: 'Sci-Fi, Action',
    rating: 8.3,
    views: 98000,
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    status: 'ongoing',
    chapters: 425,
  },
  {
    id: 6,
    title: 'Noblesse',
    genre: 'Action, Supernatural',
    rating: 8.6,
    views: 156000,
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    status: 'completed',
    chapters: 529,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-12 md:py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Selamat Datang di <span className="text-primary">MangaHub</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Baca komik dan manga favorit dengan koleksi terlengkap. Dapatkan poin dengan membaca dan buka chapter premium!
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn-primary">Mulai Membaca</button>
                <button className="btn-secondary">Jelajahi Koleksi</button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div className="hidden md:block">
              <div
                className="w-full aspect-square rounded-2xl shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1500+</div>
              <p className="text-muted-foreground">Judul Komik</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Pembaca Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Chapter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Flame size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Trending Sekarang</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingManga.map((manga) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="group manga-card"
              >
                {/* Image */}
                <div
                  className="w-full aspect-[3/4] relative overflow-hidden bg-gradient-to-br"
                  style={{ background: manga.image }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                  
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      manga.status === 'ongoing'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {manga.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{manga.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {manga.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {manga.genre}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <TrendingUp size={12} />
                    {manga.views.toLocaleString('id-ID')} views
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Spotlight */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-2xl">⭐</span> Pilihan Minggu Ini
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {trendingManga.slice(0, 2).map((manga) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="group flex gap-4 bg-card rounded-xl overflow-hidden hover:bg-card/80 transition-colors"
              >
                <div
                  className="w-32 aspect-[3/4] flex-shrink-0 relative"
                  style={{ background: manga.image }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                </div>
                
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {manga.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{manga.genre}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{manga.rating}/10</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {manga.chapters} chapters • {manga.views.toLocaleString('id-ID')} views
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/trending" className="btn-primary w-full text-center">
            Lihat Semua Trending
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl border border-primary/30 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jadilah Pembaca Premium</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kumpulkan poin setiap kali membaca dan buka chapter premium eksklusif. Nikmati pengalaman membaca tanpa batas!
            </p>
            <button className="btn-primary">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

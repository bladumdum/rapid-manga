import Layout from '@/components/Layout';
import { Flame, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Manga {
  id: number;
  title: string;
  genre: string;
  rating: number;
  views: number;
  image: string;
  status: 'ongoing' | 'completed';
}

const trendingList: Manga[] = [
  {
    id: 1,
    title: 'Solo Leveling',
    genre: 'Action, Fantasy',
    rating: 9.1,
    views: 342000,
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Demon Slayer',
    genre: 'Action, Fantasy',
    rating: 9.2,
    views: 256000,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Tower of God',
    genre: 'Adventure, Fantasy',
    rating: 8.8,
    views: 189000,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    status: 'ongoing',
  },
  {
    id: 4,
    title: 'Blue Exorcist',
    genre: 'Action, Supernatural',
    rating: 8.5,
    views: 125000,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    status: 'ongoing',
  },
  {
    id: 5,
    title: 'The Gamer',
    genre: 'Sci-Fi, Action',
    rating: 8.3,
    views: 98000,
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    status: 'ongoing',
  },
  {
    id: 6,
    title: 'Noblesse',
    genre: 'Action, Supernatural',
    rating: 8.6,
    views: 156000,
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    status: 'completed',
  },
  {
    id: 7,
    title: 'The Beginning After The End',
    genre: 'Fantasy, Action',
    rating: 8.9,
    views: 201000,
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    status: 'ongoing',
  },
  {
    id: 8,
    title: 'Omniscient Reader',
    genre: 'Fantasy, Thriller',
    rating: 9.0,
    views: 278000,
    image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    status: 'ongoing',
  },
];

export default function Trending() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-12 bg-gradient-to-b from-secondary to-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Flame size={32} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Trending Sekarang</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Komik dan manga paling populer yang sedang dibaca oleh jutaan pembaca
          </p>
        </div>
      </section>

      {/* Trending Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingList.map((manga) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="group manga-card"
              >
                <div
                  className="w-full aspect-[3/4] relative overflow-hidden bg-gradient-to-br"
                  style={{ background: manga.image }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />

                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        manga.status === 'ongoing'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {manga.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{manga.rating}</span>
                  </div>
                </div>

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

      {/* Top Charts */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Rating</h2>

          <div className="space-y-3">
            {trendingList.sort((a, b) => b.rating - a.rating).slice(0, 5).map((manga, index) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="flex items-center gap-4 bg-card rounded-lg p-4 border border-muted hover:border-primary transition-colors"
              >
                <div className="text-2xl font-bold text-primary w-8">
                  {index + 1}
                </div>
                <div
                  className="w-16 h-20 rounded flex-shrink-0"
                  style={{ background: manga.image }}
                />
                <div className="flex-1">
                  <h3 className="font-bold">{manga.title}</h3>
                  <p className="text-sm text-muted-foreground">{manga.genre}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{manga.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {manga.views.toLocaleString('id-ID')} views
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

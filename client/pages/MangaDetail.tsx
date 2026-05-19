import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Star, BookOpen, Download, Share2, Heart } from 'lucide-react';
import { useState } from 'react';

interface Chapter {
  id: number;
  number: number;
  title: string;
  date: string;
  isPremium: boolean;
  hasRead: boolean;
}

export default function MangaDetail() {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const chapters: Chapter[] = [
    { id: 1, number: 200, title: 'Akhir Era', date: '2024-01-10', isPremium: false, hasRead: true },
    { id: 2, number: 199, title: 'Pertarungan Terakhir', date: '2024-01-08', isPremium: true, hasRead: false },
    { id: 3, number: 198, title: 'Kekuatan Sejati', date: '2024-01-05', isPremium: false, hasRead: true },
    { id: 4, number: 197, title: 'Pengkhianatan', date: '2024-01-01', isPremium: false, hasRead: true },
    { id: 5, number: 196, title: 'Rahasia Masa Lalu', date: '2023-12-28', isPremium: true, hasRead: false },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-b from-secondary to-background">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cover */}
            <div className="flex justify-center md:justify-start">
              <div
                className="w-64 h-96 rounded-2xl shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Ongoing
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">Solo Leveling</h1>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">9.1/10</span>
                    <span className="text-muted-foreground">(24.5K reviews)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Author:</span> Chugong
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Genre:</span> Action, Fantasy, Adventure
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Status:</span> Completed - 200 Chapters
                  </p>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  Sung Jinwoo adalah seorang pemburu kelas E yang merupakan pemburu terlemah. Namun suatu hari, dia mengalami kesadaran luar biasa dan mulai mendapatkan kekuatan yang terus bertambah. Dengan sistem yang hanya dia yang bisa lihat, Jinwoo memulai perjalanannya untuk menjadi pemburu terkuat.
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to={`/reader/${id}`} className="btn-primary flex items-center gap-2">
                    <BookOpen size={18} />
                    Mulai Membaca
                  </Link>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                      isFavorite
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-secondary border-muted text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <Heart size={18} className={isFavorite ? 'fill-primary' : ''} />
                  </button>
                  <button className="px-6 py-3 rounded-lg font-semibold transition-colors border bg-secondary border-muted text-foreground hover:bg-secondary/80 flex items-center gap-2">
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Views</p>
              <p className="text-2xl font-bold">3.2M</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Followers</p>
              <p className="text-2xl font-bold">245K</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Rating</p>
              <p className="text-2xl font-bold">9.1/10</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Your Points</p>
              <p className="text-2xl font-bold text-primary">1,250</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen size={28} className="text-primary" />
            Chapter List
          </h2>

          <div className="space-y-2">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/reader/${id}?chapter=${chapter.number}`}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  chapter.hasRead
                    ? 'bg-primary/5 border-primary/30 hover:bg-primary/10'
                    : 'bg-card border-muted hover:border-primary'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">
                      Chapter {chapter.number}
                      {chapter.isPremium && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                          Premium
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{chapter.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{chapter.date}</p>
                  {chapter.hasRead && (
                    <p className="text-xs text-primary font-semibold mt-1">Sudah dibaca</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Rekomendasi Serupa</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Link key={i} to="/" className="group manga-card">
                <div
                  className="w-full aspect-[3/4] relative"
                  style={{
                    background: `linear-gradient(135deg, hsl(${50 + i * 20} 100% 50%) 0%, hsl(${80 + i * 20} 100% 50%) 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm line-clamp-2">Manga Recommendation {i}</h3>
                  <p className="text-xs text-muted-foreground mt-1">Action, Fantasy</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

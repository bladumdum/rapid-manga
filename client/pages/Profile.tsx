import Layout from '@/components/Layout';
import { User, Star, TrendingUp, Award, BookOpen, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const userStats = {
    username: 'Manga Lover',
    email: 'user@example.com',
    points: 3250,
    level: 8,
    booksRead: 156,
    chaptersRead: 4521,
    favorites: 42,
    readingStreak: 15,
  };

  const recentBooks = [
    { id: 1, title: 'Solo Leveling', chapters: 45, progress: 100 },
    { id: 2, title: 'Demon Slayer', chapters: 35, progress: 87 },
    { id: 3, title: 'Blue Exorcist', chapters: 28, progress: 65 },
  ];

  const achievements = [
    { icon: '🔥', title: 'Pembaca Konsisten', desc: '7 hari berturut-turut membaca' },
    { icon: '⭐', title: 'Pecinta Komik', desc: '50 komik ditambahkan ke favorit' },
    { icon: '📚', title: 'Bookworm', desc: '1000 chapter sudah dibaca' },
    { icon: '🏆', title: 'Premium Member', desc: 'Langganan premium aktif' },
  ];

  return (
    <Layout>
      {/* Profile Header */}
      <section className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User size={48} className="text-primary-foreground" />
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-2">{userStats.username}</h1>
              <p className="text-muted-foreground mb-4">{userStats.email}</p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <button className="btn-primary text-sm px-4 py-2">Edit Profil</button>
                <button className="btn-secondary text-sm px-4 py-2 flex items-center gap-2">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>

            {/* Level Badge */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">{userStats.level}</span>
              </div>
              <p className="text-sm text-muted-foreground">Level</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md">
            <p className="text-sm text-muted-foreground mb-2">
              {userStats.points} / 5000 untuk Level {userStats.level + 1}
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${(userStats.points / 5000) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground text-sm">Total Points</p>
                <Star size={20} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">{userStats.points}</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground text-sm">Books Read</p>
                <BookOpen size={20} className="text-accent" />
              </div>
              <p className="text-3xl font-bold">{userStats.booksRead}</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground text-sm">Chapters Read</p>
                <TrendingUp size={20} className="text-primary" />
              </div>
              <p className="text-3xl font-bold">{userStats.chaptersRead}</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground text-sm">Reading Streak</p>
                <Award size={20} className="text-orange-500" />
              </div>
              <p className="text-3xl font-bold">{userStats.readingStreak} days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Pencapaian</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-muted">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reading */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Membaca Terakhir</h2>
          <div className="space-y-4">
            {recentBooks.map((book) => (
              <div key={book.id} className="bg-card rounded-lg p-6 border border-muted hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Chapter {Math.ceil((book.progress / 100) * book.chapters)} dari {book.chapters}
                    </p>
                  </div>
                  <Link
                    to={`/manga/1`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Lanjut Baca
                  </Link>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{book.progress}% selesai</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Pengaturan</h2>
          <div className="space-y-3">
            {['Privasi', 'Notifikasi', 'Preferensi Membaca', 'Hubungi Kami', 'Kebijakan Privasi'].map((item) => (
              <button
                key={item}
                className="w-full bg-card rounded-lg p-4 border border-muted hover:border-primary transition-colors text-left font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

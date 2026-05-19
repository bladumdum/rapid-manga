import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground mb-8">
            Halaman ini sedang dalam pengembangan. Terus ikuti untuk fitur baru yang menarik!
          </p>
          <Link to="/" className="btn-primary">
            Kembali ke Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

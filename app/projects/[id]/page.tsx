import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/personal';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProjectDetail } from '@/components/ProjectDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (project == null || Number.isNaN(projectId)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-slate-300 hover:text-white mb-8 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ProjectDetail project={project} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

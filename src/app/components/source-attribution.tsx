import { ExternalLink, FileText } from 'lucide-react';

interface Source {
  title: string;
  url: string;
  excerpt: string;
}

interface SourceAttributionProps {
  sources: Source[];
}

export function SourceAttribution({ sources }: SourceAttributionProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-4 h-4 text-blue-600" />
        <h3 className="text-sm font-semibold text-blue-900">Source Attribution</h3>
      </div>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            className="block p-3 bg-white rounded-md border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {source.title}
                </p>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{source.excerpt}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

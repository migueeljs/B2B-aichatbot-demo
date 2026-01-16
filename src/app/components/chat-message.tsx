import { Bot, User } from 'lucide-react';
import { SourceAttribution } from './source-attribution';

interface Source {
  title: string;
  url: string;
  excerpt: string;
}

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: Source[];
}

export function ChatMessage({ role, content, timestamp, sources }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-2xl`}>
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-slate-200 text-slate-900'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
        
        {sources && !isUser && <SourceAttribution sources={sources} />}
        
        <span className={`text-xs text-slate-500 mt-1 ${isUser ? 'mr-2' : 'ml-2'}`}>
          {timestamp}
        </span>
      </div>

      {isUser && (
        <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}

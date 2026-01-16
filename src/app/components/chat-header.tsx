import { User, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onEscalate: () => void;
}

export function ChatHeader({ onEscalate }: ChatHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-slate-900">AI Support Assistant</h1>
          <p className="text-sm text-slate-500">Always here to help</p>
        </div>
      </div>
      
      <button
        onClick={onEscalate}
        className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
      >
        <User className="w-4 h-4" />
        Talk to a Human
      </button>
    </header>
  );
}

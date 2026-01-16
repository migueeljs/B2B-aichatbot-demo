import { Clock, MessageSquare, FileText } from 'lucide-react';

interface TicketHistoryItem {
  id: string;
  title: string;
  status: 'open' | 'resolved' | 'pending';
  date: string;
}

interface RecentQuery {
  id: string;
  query: string;
  time: string;
}

const ticketHistory: TicketHistoryItem[] = [
  { id: 'TKT-2847', title: 'API Rate Limit Issue', status: 'open', date: '2 hours ago' },
  { id: 'TKT-2846', title: 'Invoice Discrepancy Q4', status: 'pending', date: '5 hours ago' },
  { id: 'TKT-2845', title: 'SLA Compliance Check', status: 'resolved', date: '1 day ago' },
  { id: 'TKT-2844', title: 'User Permissions Error', status: 'resolved', date: '2 days ago' },
  { id: 'TKT-2843', title: 'Data Export Request', status: 'resolved', date: '3 days ago' },
];

const recentQueries: RecentQuery[] = [
  { id: '1', query: 'How do I upgrade my enterprise plan?', time: '10 min ago' },
  { id: '2', query: 'What are the current SLA guarantees?', time: '1 hour ago' },
  { id: '3', query: 'API authentication documentation', time: '3 hours ago' },
  { id: '4', query: 'Billing cycle information', time: '1 day ago' },
];

export function ChatSidebar() {
  return (
    <aside className="w-80 bg-slate-50 border-r border-slate-200 flex flex-col h-full">
      {/* Ticket History Section */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-slate-600" />
          <h2 className="font-semibold text-slate-900">Ticket History</h2>
        </div>
        <div className="space-y-2">
          {ticketHistory.map((ticket) => (
            <div
              key={ticket.id}
              className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-1">
                <span className="text-xs font-semibold text-blue-600">{ticket.id}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    ticket.status === 'open'
                      ? 'bg-blue-100 text-blue-700'
                      : ticket.status === 'pending'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <p className="text-sm text-slate-900 mb-1">{ticket.title}</p>
              <p className="text-xs text-slate-500">{ticket.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Queries Section */}
      <div className="p-6 flex-1 overflow-auto">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-slate-600" />
          <h2 className="font-semibold text-slate-900">Recent Queries</h2>
        </div>
        <div className="space-y-2">
          {recentQueries.map((query) => (
            <div
              key={query.id}
              className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900 line-clamp-2">{query.query}</p>
                  <p className="text-xs text-slate-500 mt-1">{query.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

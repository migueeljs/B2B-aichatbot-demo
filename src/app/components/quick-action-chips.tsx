import { Wrench, CreditCard, Clock } from 'lucide-react';

interface QuickActionChipsProps {
  onActionClick: (action: string) => void;
}

export function QuickActionChips({ onActionClick }: QuickActionChipsProps) {
  const actions = [
    { id: 'technical', label: 'Technical Support', icon: Wrench },
    { id: 'billing', label: 'Billing Inquiry', icon: CreditCard },
    { id: 'sla', label: 'SLA Status', icon: Clock },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-slate-50 border-t border-slate-200">
      <span className="text-xs text-slate-600 w-full mb-1">Quick Actions:</span>
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.id}
            onClick={() => onActionClick(action.label)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-full hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all text-sm font-medium"
          >
            <Icon className="w-4 h-4" />
            {action.label}
          </button>
        );
      })}
    </div>
  );
}

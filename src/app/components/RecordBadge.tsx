import { LucideIcon } from 'lucide-react';

interface RecordBadgeProps {
  icon: LucideIcon;
  label: string;
  count: number;
  color: string;
}

export function RecordBadge({ icon: Icon, label, count, color }: RecordBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${color} bg-opacity-10 border border-current transition-all hover:scale-105`}>
      <Icon size={14} className={color.replace('bg-', 'text-')} />
      <span className={`text-[11px] font-bold ${color.replace('bg-', 'text-')}`}>
        {label} <span className="ml-1 text-sm">{count}</span>
      </span>
    </div>
  );
}

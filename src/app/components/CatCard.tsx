import { useNavigate } from 'react-router';
import { Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { Cat, storage } from '../storage';
import { useState, useEffect } from 'react';
import { RecordBadge } from './RecordBadge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CatCard({ cat }: { cat: Cat }) {
  const navigate = useNavigate();
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function loadStats() {
      const today = await storage.getTodayRecordCount(cat.id);
      const total = await storage.getTotalRecordCount(cat.id);
      setTodayCount(today);
      setTotalCount(total);
    }
    loadStats();
  }, [cat.id]);

  return (
    <div 
      onClick={() => navigate(`/cat/${cat.id}`)}
      className="bg-white rounded-3xl p-5 shadow-sm border border-pink-50 mb-4 cursor-pointer active:scale-[0.98] transition-all"
    >
      <div className="flex gap-4 items-center">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-pink-50 border-2 border-pink-100 flex-shrink-0">
          <ImageWithFallback src={cat.photoUrl} alt={cat.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{cat.name}</h3>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <Calendar size={14} /> {cat.breed} · {cat.birthDate}
          </p>
          
          <div className="flex gap-2 mt-3">
            <RecordBadge 
              icon={CheckCircle2} 
              label="오늘" 
              count={todayCount} 
              color="bg-pink-400 text-pink-500" 
            />
            <RecordBadge 
              icon={FileText} 
              label="누적" 
              count={totalCount} 
              color="bg-blue-400 text-blue-500" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

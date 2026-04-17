import { useState, useEffect } from 'react';
import { Cat, storage } from '../storage';
import { CatCard } from '../components/CatCard';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Home() {
  const [cats, setCats] = useState<Cat[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    storage.getCats().then(setCats);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-700">우리 집 고양이들</h2>
        <button 
          onClick={() => navigate('/settings')}
          className="p-2 bg-pink-100 text-pink-500 rounded-full hover:bg-pink-200 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      {cats.length > 0 ? (
        cats.map(cat => <CatCard key={cat.id} cat={cat} />)
      ) : (
        <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-gray-100">
          <p className="text-gray-400 mb-4">등록된 고양이가 없어요.</p>
          <button 
            onClick={() => navigate('/settings')}
            className="px-6 py-2 bg-pink-400 text-white rounded-full font-bold shadow-md"
          >
            고양이 등록하기
          </button>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Cat, storage } from '../storage';
import { ChevronLeft, Camera, Save } from 'lucide-react';

export function AddRecord() {
  const navigate = useNavigate();
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCatId, setSelectedCatId] = useState('');
  const [type, setType] = useState('weight');

  useEffect(() => {
    storage.getCats().then(data => {
      setCats(data);
      if (data.length > 0) setSelectedCatId(data[0].id);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('기록이 저장되었습니다!');
    navigate('/');
  };

  return (
    <div className="pb-10">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2"><ChevronLeft /></button>
        <h2 className="text-xl font-bold">건강 기록하기</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-500 mb-3">고양이 선택</label>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {cats.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCatId(cat.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full border-2 transition-all ${
                  selectedCatId === cat.id ? 'border-pink-400 bg-pink-50 text-pink-500' : 'border-gray-100 text-gray-400'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-500 mb-2">기록 종류</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 bg-gray-50 rounded-2xl border-none outline-none text-gray-700"
            >
              <option value="weight">몸무게</option>
              <option value="food">사료/간식</option>
              <option value="water">음수량</option>
              <option value="poo">배변</option>
              <option value="vomit">구토</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-500 mb-2">메모</label>
            <textarea 
              placeholder="오늘의 특이사항을 적어주세요."
              className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none h-32 resize-none"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-4 bg-pink-400 text-white rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <Save size={20} /> 기록 저장하기
        </button>
      </form>
    </div>
  );
}

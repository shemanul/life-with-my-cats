import { useNavigate } from 'react-router';
import { ChevronLeft, UserPlus, Info } from 'lucide-react';

export function Settings() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2"><ChevronLeft /></button>
        <h2 className="text-xl font-bold">설정 및 관리</h2>
      </div>

      <div className="space-y-4">
        <button className="w-full bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 text-left">
          <div className="w-12 h-12 bg-pink-50 text-pink-400 rounded-2xl flex items-center justify-center">
            <UserPlus size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">새 고양이 등록</h3>
            <p className="text-sm text-gray-400">새로운 가족을 추가합니다.</p>
          </div>
        </button>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
            <Info size={16} /> 앱 정보
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-gray-600">버전</span>
            <span className="font-bold text-pink-400">v1.2.0</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">개발자</span>
            <span className="font-bold">Life with My Cats Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}
13. src/app/pages/NotFound.tsx (404 페이지)
import { useNavigate } from 'react-router';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-4xl font-bold text-pink-400 mb-4">404</h2>
      <p className="text-gray-500 mb-8">길을 잃은 고양이가 된 것 같아요!</p>
      <button 
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-pink-400 text-white rounded-full font-bold shadow-md"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}

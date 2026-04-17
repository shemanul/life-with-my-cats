import { Outlet, useNavigate, useLocation } from 'react-router';
import { Home, PlusCircle, Settings, Heart } from 'lucide-react';

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: '홈', path: '/' },
    { icon: PlusCircle, label: '기록추가', path: '/add-record' },
    { icon: Heart, label: '건강관리', path: '/settings' },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 shadow-xl">
      <header className="bg-white p-4 sticky top-0 z-10 border-b border-pink-100">
        <h1 className="text-2xl font-bold text-pink-400 text-center">Life with My Cats</h1>
      </header>
      
      <main className="p-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 flex justify-around py-3 px-6 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === item.path ? 'text-pink-400' : 'text-gray-400'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

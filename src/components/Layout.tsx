import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem('userRole') || 'teacher';

  const navItems = [
    { icon: 'Home', label: 'Главная', path: '/dashboard' },
    { icon: 'BookOpen', label: 'Журнал', path: '/journal' },
    { icon: 'Award', label: 'Оценки', path: '/grades' },
    { icon: 'FileText', label: 'Домашние задания', path: '/homework' },
    { icon: 'Calendar', label: 'Расписание', path: '/schedule' },
    { icon: 'MessageSquare', label: 'Сообщения', path: '/messages' },
    { icon: 'BarChart3', label: 'Аналитика', path: '/analytics' },
    { icon: 'User', label: 'Профиль', path: '/profile' },
    { icon: 'Settings', label: 'Настройки', path: '/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-sidebar-primary-foreground" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sidebar-foreground text-lg">Школа №1</span>
              <span className="text-xs text-sidebar-foreground/70">
                {userRole === 'admin' ? 'Администратор' : 'Учитель'}
              </span>
            </div>
          </div>
        </div>
        <Separator className="bg-sidebar-border" />
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant={isActive ? 'secondary' : 'ghost'}
                className={`w-full justify-start ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon name={item.icon as any} className="mr-3" size={20} />
                {item.label}
              </Button>
            );
          })}
        </nav>
        <Separator className="bg-sidebar-border" />
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                ИИ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">Иванов Иван</p>
              <p className="text-xs text-sidebar-foreground/70">ivan@school.ru</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={handleLogout}
          >
            <Icon name="LogOut" className="mr-2" size={16} />
            Выйти
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
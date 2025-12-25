import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const stats = [
    { icon: 'Users', label: 'Учеников', value: '324', color: 'text-blue-500' },
    { icon: 'BookOpen', label: 'Классов', value: '12', color: 'text-green-500' },
    { icon: 'FileText', label: 'Заданий', value: '48', color: 'text-orange-500' },
    { icon: 'Award', label: 'Средний балл', value: '4.2', color: 'text-purple-500' },
  ];

  const recentActivities = [
    { icon: 'Plus', text: 'Добавлена новая оценка по Математике для 9А класса', time: '10 минут назад' },
    { icon: 'FileText', text: 'Создано домашнее задание по Русскому языку', time: '1 час назад' },
    { icon: 'MessageSquare', text: 'Новое сообщение от родителя ученика', time: '2 часа назад' },
    { icon: 'Calendar', text: 'Обновлено расписание на следующую неделю', time: '3 часа назад' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Добро пожаловать!</h1>
          <p className="text-muted-foreground">Обзор вашей работы в школе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon name={stat.icon as any} className={stat.color} size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Последняя активность</CardTitle>
            <CardDescription>События за сегодня</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={activity.icon as any} className="text-primary" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ближайшие уроки</CardTitle>
              <CardDescription>Сегодня, 25 декабря</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Математика - 9А класс', 'Физика - 10Б класс', 'Информатика - 11А класс'].map(
                  (lesson, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <Icon name="Clock" className="text-primary" size={18} />
                      <span className="font-medium">{lesson}</span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Статистика успеваемости</CardTitle>
              <CardDescription>За текущую неделю</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { grade: '5', count: 45, percent: 75 },
                  { grade: '4', count: 28, percent: 47 },
                  { grade: '3', count: 12, percent: 20 },
                ].map((item) => (
                  <div key={item.grade}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Оценка {item.grade}</span>
                      <span className="text-sm text-muted-foreground">{item.count}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

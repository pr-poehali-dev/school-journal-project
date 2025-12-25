import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Section = 'dashboard' | 'journal' | 'grades' | 'homework' | 'schedule' | 'messages' | 'profile' | 'settings';

const mockStudents = [
  { id: 1, name: 'Иванов Иван', grades: [5, 4, 5, 5, 4], avg: 4.6 },
  { id: 2, name: 'Петрова Мария', grades: [5, 5, 5, 4, 5], avg: 4.8 },
  { id: 3, name: 'Сидоров Петр', grades: [4, 3, 4, 4, 3], avg: 3.6 },
  { id: 4, name: 'Козлова Анна', grades: [5, 5, 4, 5, 5], avg: 4.8 },
  { id: 5, name: 'Новиков Дмитрий', grades: [3, 4, 3, 4, 4], avg: 3.6 },
];

const subjects = ['Математика', 'Русский язык', 'Физика', 'Химия', 'История'];

const mockHomework = [
  { id: 1, subject: 'Математика', task: 'Решить задачи №15-20', deadline: '2025-12-28', status: 'active' },
  { id: 2, subject: 'Физика', task: 'Лабораторная работа №3', deadline: '2025-12-30', status: 'active' },
  { id: 3, subject: 'История', task: 'Реферат по теме "Петровские реформы"', deadline: '2026-01-05', status: 'pending' },
];

const mockSchedule = [
  { time: '08:00', subject: 'Математика', room: '201', teacher: 'Иванова А.П.' },
  { time: '09:00', subject: 'Русский язык', room: '305', teacher: 'Петрова М.С.' },
  { time: '10:00', subject: 'Физика', room: '410', teacher: 'Сидоров В.И.' },
  { time: '11:00', subject: 'Химия', room: '412', teacher: 'Козлова Е.А.' },
  { time: '12:00', subject: 'История', room: '308', teacher: 'Новиков Д.П.' },
];

function App() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Главная', icon: 'Home' },
    { id: 'journal', label: 'Журнал', icon: 'BookOpen' },
    { id: 'grades', label: 'Оценки', icon: 'Award' },
    { id: 'homework', label: 'Домашние задания', icon: 'ClipboardList' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'messages', label: 'Сообщения', icon: 'MessageSquare' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-gradient-to-b from-primary to-secondary shadow-xl">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-primary" size={24} />
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">ЭлектронныйЖурнал</h1>
                <p className="text-blue-100 text-xs">Школа №1</p>
              </div>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-white text-primary shadow-lg scale-105'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-white text-primary font-semibold">ИА</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium text-sm">Иванова А.П.</p>
                  <p className="text-blue-100 text-xs">Учитель</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {activeSection === 'dashboard' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Главная панель</h2>
                <p className="text-gray-600">Обзор успеваемости и статистика</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Всего учеников</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-primary">156</p>
                      <Icon name="Users" className="text-primary/20" size={40} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Средний балл</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-secondary">4.2</p>
                      <Icon name="TrendingUp" className="text-secondary/20" size={40} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Активных заданий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-primary">24</p>
                      <Icon name="ClipboardList" className="text-primary/20" size={40} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">Новых сообщений</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-3xl font-bold text-secondary">8</p>
                      <Icon name="MessageSquare" className="text-secondary/20" size={40} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Успеваемость по предметам</CardTitle>
                    <CardDescription>Средние баллы класса</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {subjects.map((subject, index) => {
                      const scores = [4.8, 4.5, 4.2, 3.9, 4.6];
                      return (
                        <div key={subject}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{subject}</span>
                            <span className="text-sm font-bold text-primary">{scores[index]}</span>
                          </div>
                          <Progress value={scores[index] * 20} className="h-2" />
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Последние оценки</CardTitle>
                    <CardDescription>Выставленные сегодня</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockStudents.slice(0, 5).map((student) => (
                        <div key={student.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{student.name}</p>
                              <p className="text-xs text-gray-500">Математика</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-lg font-bold px-3 py-1 border-primary text-primary">
                            {student.grades[0]}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'journal' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Классный журнал</h2>
                <p className="text-gray-600">9А класс • Математика</p>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Журнал успеваемости</CardTitle>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить оценку
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Ученик</TableHead>
                          {['20.12', '21.12', '22.12', '25.12', '26.12'].map((date) => (
                            <TableHead key={date} className="text-center">{date}</TableHead>
                          ))}
                          <TableHead className="text-center">Средний балл</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            {student.grades.map((grade, idx) => (
                              <TableCell key={idx} className="text-center">
                                <Badge 
                                  variant={grade >= 4 ? "default" : "secondary"}
                                  className={`${grade >= 4 ? 'bg-primary hover:bg-primary/90' : 'bg-gray-300'} cursor-pointer`}
                                >
                                  {grade}
                                </Badge>
                              </TableCell>
                            ))}
                            <TableCell className="text-center">
                              <span className="font-bold text-primary">{student.avg}</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'grades' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Оценки</h2>
                <p className="text-gray-600">Анализ успеваемости учеников</p>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">Все ученики</TabsTrigger>
                  <TabsTrigger value="top">Отличники</TabsTrigger>
                  <TabsTrigger value="low">Требуют внимания</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockStudents.map((student) => (
                      <Card key={student.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{student.name}</CardTitle>
                                <CardDescription>Средний балл: {student.avg}</CardDescription>
                              </div>
                            </div>
                            <Badge className={student.avg >= 4.5 ? 'bg-green-500' : student.avg >= 4 ? 'bg-blue-500' : 'bg-yellow-500'}>
                              {student.avg >= 4.5 ? 'Отличник' : student.avg >= 4 ? 'Хорошист' : 'Средний'}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {subjects.map((subject, idx) => (
                              <div key={subject} className="flex justify-between items-center">
                                <span className="text-sm">{subject}</span>
                                <Badge variant="outline" className="font-bold">
                                  {student.grades[idx]}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="top">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockStudents.filter(s => s.avg >= 4.5).map((student) => (
                      <Card key={student.id}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-green-100 text-green-700 font-semibold">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{student.name}</CardTitle>
                              <CardDescription>Средний балл: {student.avg}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="low">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockStudents.filter(s => s.avg < 4).map((student) => (
                      <Card key={student.id}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-yellow-100 text-yellow-700 font-semibold">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{student.name}</CardTitle>
                              <CardDescription>Средний балл: {student.avg}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === 'homework' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Домашние задания</h2>
                <p className="text-gray-600">Управление заданиями для учеников</p>
              </div>

              <div className="flex gap-3">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Новое задание
                </Button>
                <Button variant="outline">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтр
                </Button>
              </div>

              <div className="grid gap-4">
                {mockHomework.map((hw) => (
                  <Card key={hw.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary">{hw.subject}</Badge>
                            <Badge variant={hw.status === 'active' ? 'default' : 'secondary'}>
                              {hw.status === 'active' ? 'Активно' : 'Ожидает'}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{hw.task}</h3>
                          <p className="text-sm text-gray-600">Срок сдачи: {hw.deadline}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'schedule' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Расписание</h2>
                <p className="text-gray-600">Понедельник, 25 декабря 2025</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {mockSchedule.map((lesson, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-colors">
                        <div className="text-center min-w-[60px]">
                          <p className="font-bold text-primary">{lesson.time}</p>
                          <p className="text-xs text-gray-500">{idx + 1} урок</p>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{lesson.subject}</h3>
                          <p className="text-sm text-gray-600">{lesson.teacher}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="font-semibold">
                            <Icon name="MapPin" size={12} className="mr-1" />
                            {lesson.room}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="animate-fade-in">
              <Card className="h-[600px]">
                <CardHeader>
                  <CardTitle>Сообщения</CardTitle>
                  <CardDescription>Общение с учениками и родителями</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[400px]">
                  <div className="text-center">
                    <Icon name="MessageSquare" size={64} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Выберите чат для начала общения</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Профиль</h2>
                <p className="text-gray-600">Личная информация</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-6 mb-8">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="bg-primary text-white text-2xl font-bold">ИА</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Иванова Анна Петровна</h3>
                      <p className="text-gray-600 mb-2">Учитель математики</p>
                      <Badge className="bg-primary">9А класс</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="font-medium">ivanova@school1.ru</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Телефон</p>
                      <p className="font-medium">+7 (999) 123-45-67</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Предмет</p>
                      <p className="font-medium">Математика</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Стаж работы</p>
                      <p className="font-medium">12 лет</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Настройки</h2>
                <p className="text-gray-600">Управление системой</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Общие настройки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Уведомления</p>
                      <p className="text-sm text-gray-500">Получать уведомления о новых оценках</p>
                    </div>
                    <Button variant="outline">Настроить</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Язык интерфейса</p>
                      <p className="text-sm text-gray-500">Русский</p>
                    </div>
                    <Button variant="outline">Изменить</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Экспорт данных</p>
                      <p className="text-sm text-gray-500">Выгрузка журнала в Excel</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Download" size={16} className="mr-2" />
                      Экспортировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

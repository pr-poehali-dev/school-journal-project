import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Homework = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const homeworks = [
    {
      id: 1,
      subject: 'Математика',
      class: '9А',
      title: 'Решение квадратных уравнений',
      description: 'Решить задачи №15-20 из учебника, повторить формулы',
      deadline: '2025-12-27',
      status: 'active',
      submitted: 18,
      total: 22,
    },
    {
      id: 2,
      subject: 'Физика',
      class: '10Б',
      title: 'Законы Ньютона',
      description: 'Выполнить лабораторную работу, оформить отчёт',
      deadline: '2025-12-28',
      status: 'active',
      submitted: 12,
      total: 20,
    },
    {
      id: 3,
      subject: 'Русский язык',
      class: '9А',
      title: 'Сочинение-рассуждение',
      description: 'Написать сочинение на тему "Роль книги в жизни человека"',
      deadline: '2025-12-26',
      status: 'overdue',
      submitted: 15,
      total: 22,
    },
    {
      id: 4,
      subject: 'Информатика',
      class: '11А',
      title: 'Программирование на Python',
      description: 'Создать программу для сортировки массива',
      deadline: '2025-12-30',
      status: 'active',
      submitted: 8,
      total: 18,
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-100 text-green-700 border-green-300">Активно</Badge>;
    }
    if (status === 'overdue') {
      return <Badge className="bg-red-100 text-red-700 border-red-300">Просрочено</Badge>;
    }
    return <Badge>Завершено</Badge>;
  };

  const getProgressColor = (submitted: number, total: number) => {
    const percent = (submitted / total) * 100;
    if (percent >= 80) return 'text-green-600';
    if (percent >= 50) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Домашние задания</h1>
            <p className="text-muted-foreground">Управление заданиями для учеников</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" className="mr-2" size={18} />
                Создать задание
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Новое домашнее задание</DialogTitle>
                <DialogDescription>Создайте новое задание для учеников</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Класс</Label>
                    <Select>
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Выберите класс" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9a">9А</SelectItem>
                        <SelectItem value="9b">9Б</SelectItem>
                        <SelectItem value="10a">10А</SelectItem>
                        <SelectItem value="11a">11А</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Предмет</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Выберите предмет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Математика</SelectItem>
                        <SelectItem value="physics">Физика</SelectItem>
                        <SelectItem value="russian">Русский язык</SelectItem>
                        <SelectItem value="it">Информатика</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Название задания</Label>
                  <Input id="title" placeholder="Введите название" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    placeholder="Подробное описание задания"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Срок сдачи</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Отмена
                </Button>
                <Button onClick={() => setIsDialogOpen(false)}>Создать</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {homeworks.map((hw) => (
            <Card key={hw.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{hw.title}</CardTitle>
                      {getStatusBadge(hw.status)}
                    </div>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="BookOpen" size={14} />
                        {hw.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {hw.class}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        до {new Date(hw.deadline).toLocaleDateString('ru-RU')}
                      </span>
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="MoreVertical" size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{hw.description}</p>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Сдали работу</div>
                      <div className={`text-2xl font-bold ${getProgressColor(hw.submitted, hw.total)}`}>
                        {hw.submitted} / {hw.total}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Процент выполнения</div>
                    <div className="text-2xl font-bold text-primary">
                      {Math.round((hw.submitted / hw.total) * 100)}%
                    </div>
                  </div>
                  <Button>
                    <Icon name="Eye" className="mr-2" size={18} />
                    Просмотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Активных заданий</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary">
                {homeworks.filter((hw) => hw.status === 'active').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Просроченных</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600">
                {homeworks.filter((hw) => hw.status === 'overdue').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Средний процент сдачи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">
                {Math.round(
                  homeworks.reduce((sum, hw) => sum + (hw.submitted / hw.total) * 100, 0) /
                    homeworks.length
                )}
                %
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Homework;

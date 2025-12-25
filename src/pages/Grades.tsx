import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState('9А');

  const subjects = [
    { name: 'Математика', avg: 4.5, grades: { 5: 12, 4: 8, 3: 2, 2: 0 } },
    { name: 'Физика', avg: 4.2, grades: { 5: 8, 4: 10, 3: 4, 2: 0 } },
    { name: 'Русский язык', avg: 4.7, grades: { 5: 15, 4: 6, 3: 1, 2: 0 } },
    { name: 'Информатика', avg: 4.8, grades: { 5: 16, 4: 5, 3: 1, 2: 0 } },
    { name: 'История', avg: 4.3, grades: { 5: 10, 4: 9, 3: 3, 2: 0 } },
  ];

  const getSubjectColor = (avg: number) => {
    if (avg >= 4.5) return 'text-green-600';
    if (avg >= 4.0) return 'text-blue-600';
    if (avg >= 3.5) return 'text-orange-600';
    return 'text-red-600';
  };

  const getTotalGrades = (grades: { 5: number; 4: number; 3: number; 2: number }) => {
    return grades[5] + grades[4] + grades[3] + grades[2];
  };

  const getGradePercentage = (count: number, total: number) => {
    return (count / total) * 100;
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Оценки по предметам</h1>
          <p className="text-muted-foreground">Детальная статистика успеваемости</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">Класс</Label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {['9А', '9Б', '10А', '10Б', '11А'].map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-6">
          {subjects.map((subject) => {
            const total = getTotalGrades(subject.grades);
            return (
              <Card key={subject.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="BookOpen" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle>{subject.name}</CardTitle>
                        <CardDescription>Всего оценок: {total}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">Средний балл</div>
                      <div className={`text-3xl font-bold ${getSubjectColor(subject.avg)}`}>
                        {subject.avg.toFixed(1)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-700 border-green-300">5</Badge>
                          <span className="text-sm text-muted-foreground">Отлично</span>
                        </div>
                        <span className="text-sm font-medium">{subject.grades[5]} оценок</span>
                      </div>
                      <Progress
                        value={getGradePercentage(subject.grades[5], total)}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-700 border-blue-300">4</Badge>
                          <span className="text-sm text-muted-foreground">Хорошо</span>
                        </div>
                        <span className="text-sm font-medium">{subject.grades[4]} оценок</span>
                      </div>
                      <Progress
                        value={getGradePercentage(subject.grades[4], total)}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-orange-100 text-orange-700 border-orange-300">3</Badge>
                          <span className="text-sm text-muted-foreground">Удовлетворительно</span>
                        </div>
                        <span className="text-sm font-medium">{subject.grades[3]} оценок</span>
                      </div>
                      <Progress
                        value={getGradePercentage(subject.grades[3], total)}
                        className="h-2"
                      />
                    </div>

                    {subject.grades[2] > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-red-100 text-red-700 border-red-300">2</Badge>
                            <span className="text-sm text-muted-foreground">
                              Неудовлетворительно
                            </span>
                          </div>
                          <span className="text-sm font-medium">{subject.grades[2]} оценок</span>
                        </div>
                        <Progress
                          value={getGradePercentage(subject.grades[2], total)}
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Общая статистика класса</CardTitle>
            <CardDescription>Распределение оценок по всем предметам</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                <Icon name="Trophy" className="mx-auto mb-2 text-green-600" size={32} />
                <div className="text-2xl font-bold text-green-600">
                  {subjects.reduce((sum, s) => sum + s.grades[5], 0)}
                </div>
                <div className="text-sm text-muted-foreground">Пятёрок</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                <Icon name="Star" className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-blue-600">
                  {subjects.reduce((sum, s) => sum + s.grades[4], 0)}
                </div>
                <div className="text-sm text-muted-foreground">Четвёрок</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-orange-50 border border-orange-200">
                <Icon name="AlertCircle" className="mx-auto mb-2 text-orange-600" size={32} />
                <div className="text-2xl font-bold text-orange-600">
                  {subjects.reduce((sum, s) => sum + s.grades[3], 0)}
                </div>
                <div className="text-sm text-muted-foreground">Троек</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary border">
                <Icon name="TrendingUp" className="mx-auto mb-2 text-primary" size={32} />
                <div className="text-2xl font-bold text-primary">
                  {(subjects.reduce((sum, s) => sum + s.avg, 0) / subjects.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Средний балл</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Grades;

import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Analytics = () => {
  const [selectedClass, setSelectedClass] = useState('9А');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const studentsAnalytics = [
    {
      id: 1,
      name: 'Александров Алексей',
      subjects: {
        'Математика': { avg: 4.6, trend: 'up', grades: [5, 4, 5, 5, 4] },
        'Физика': { avg: 4.4, trend: 'stable', grades: [4, 5, 4, 4, 5] },
        'Информатика': { avg: 4.8, trend: 'up', grades: [5, 5, 4, 5, 5] },
      },
      totalAvg: 4.6,
      attendance: 95,
    },
    {
      id: 2,
      name: 'Борисова Анна',
      subjects: {
        'Математика': { avg: 4.8, trend: 'up', grades: [5, 5, 5, 4, 5] },
        'Физика': { avg: 5.0, trend: 'stable', grades: [5, 5, 5, 5, 5] },
        'Информатика': { avg: 4.6, trend: 'down', grades: [5, 4, 5, 5, 4] },
      },
      totalAvg: 4.8,
      attendance: 98,
    },
    {
      id: 3,
      name: 'Васильев Дмитрий',
      subjects: {
        'Математика': { avg: 3.6, trend: 'down', grades: [4, 3, 4, 4, 3] },
        'Физика': { avg: 3.4, trend: 'down', grades: [3, 4, 3, 3, 4] },
        'Информатика': { avg: 3.8, trend: 'up', grades: [4, 4, 3, 4, 4] },
      },
      totalAvg: 3.6,
      attendance: 88,
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <Icon name="TrendingUp" className="text-green-600" size={16} />;
    if (trend === 'down') return <Icon name="TrendingDown" className="text-red-600" size={16} />;
    return <Icon name="Minus" className="text-gray-600" size={16} />;
  };

  const getAvgColor = (avg: number) => {
    if (avg >= 4.5) return 'text-green-600';
    if (avg >= 4.0) return 'text-blue-600';
    if (avg >= 3.5) return 'text-orange-600';
    return 'text-red-600';
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'bg-green-500';
    if (attendance >= 75) return 'bg-blue-500';
    if (attendance >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Аналитика успеваемости</h1>
          <p className="text-muted-foreground">Детальная статистика по ученикам и предметам</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">Период</Label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Неделя</SelectItem>
                    <SelectItem value="month">Месяц</SelectItem>
                    <SelectItem value="quarter">Четверть</SelectItem>
                    <SelectItem value="year">Год</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-6">
          {studentsAnalytics.map((student) => (
            <Card key={student.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{student.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Icon name="Award" size={14} />
                        Средний балл: <span className={`font-bold ${getAvgColor(student.totalAvg)}`}>
                          {student.totalAvg.toFixed(1)}
                        </span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        Посещаемость: {student.attendance}%
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`text-3xl font-bold ${getAvgColor(student.totalAvg)}`}>
                      {student.totalAvg.toFixed(1)}
                    </div>
                    <Progress
                      value={student.attendance}
                      className="w-24 h-2"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(student.subjects).map(([subject, data]) => (
                    <div key={subject} className="p-4 rounded-lg border bg-card">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon name="BookOpen" className="text-primary" size={20} />
                          <h4 className="font-semibold">{subject}</h4>
                          {getTrendIcon(data.trend)}
                        </div>
                        <div className={`text-2xl font-bold ${getAvgColor(data.avg)}`}>
                          {data.avg.toFixed(1)}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {data.grades.map((grade, idx) => {
                          const gradeColor =
                            grade === 5
                              ? 'bg-green-100 text-green-700 border-green-300'
                              : grade === 4
                              ? 'bg-blue-100 text-blue-700 border-blue-300'
                              : grade === 3
                              ? 'bg-orange-100 text-orange-700 border-orange-300'
                              : 'bg-red-100 text-red-700 border-red-300';
                          return (
                            <Badge key={idx} variant="outline" className={gradeColor}>
                              {grade}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Отличники</CardTitle>
              <CardDescription>Средний балл 4.5+</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="Trophy" className="text-green-600" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600">
                    {studentsAnalytics.filter((s) => s.totalAvg >= 4.5).length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round(
                      (studentsAnalytics.filter((s) => s.totalAvg >= 4.5).length /
                        studentsAnalytics.length) *
                        100
                    )}
                    % класса
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Средняя посещаемость</CardTitle>
              <CardDescription>За выбранный период</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name="Users" className="text-blue-600" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">
                    {Math.round(
                      studentsAnalytics.reduce((sum, s) => sum + s.attendance, 0) /
                        studentsAnalytics.length
                    )}
                    %
                  </div>
                  <Progress
                    value={
                      studentsAnalytics.reduce((sum, s) => sum + s.attendance, 0) /
                      studentsAnalytics.length
                    }
                    className="w-24 h-2 mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Требуют внимания</CardTitle>
              <CardDescription>Средний балл &lt; 3.5</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon name="AlertCircle" className="text-orange-600" size={32} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600">
                    {studentsAnalytics.filter((s) => s.totalAvg < 3.5).length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round(
                      (studentsAnalytics.filter((s) => s.totalAvg < 3.5).length /
                        studentsAnalytics.length) *
                        100
                    )}
                    % класса
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;

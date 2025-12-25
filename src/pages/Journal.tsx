import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Journal = () => {
  const [selectedClass, setSelectedClass] = useState('9А');
  const [selectedSubject, setSelectedSubject] = useState('Математика');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [newGrade, setNewGrade] = useState('');

  const students = [
    { id: 1, name: 'Александров Алексей', grades: [5, 4, 5, 5, 4], avg: 4.6 },
    { id: 2, name: 'Борисова Анна', grades: [5, 5, 5, 4, 5], avg: 4.8 },
    { id: 3, name: 'Васильев Дмитрий', grades: [4, 3, 4, 4, 3], avg: 3.6 },
    { id: 4, name: 'Григорьева Елена', grades: [5, 5, 4, 5, 5], avg: 4.8 },
    { id: 5, name: 'Дмитриев Иван', grades: [4, 4, 4, 5, 4], avg: 4.2 },
    { id: 6, name: 'Ефимова Мария', grades: [5, 5, 5, 5, 5], avg: 5.0 },
  ];

  const dates = ['15.12', '18.12', '20.12', '22.12', '25.12'];

  const getGradeColor = (grade: number) => {
    if (grade === 5) return 'bg-green-100 text-green-700 border-green-300';
    if (grade === 4) return 'bg-blue-100 text-blue-700 border-blue-300';
    if (grade === 3) return 'bg-orange-100 text-orange-700 border-orange-300';
    return 'bg-red-100 text-red-700 border-red-300';
  };

  const handleAddGrade = () => {
    console.log('Adding grade:', newGrade, 'for student:', selectedStudent);
    setSelectedStudent(null);
    setNewGrade('');
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Журнал успеваемости</h1>
            <p className="text-muted-foreground">Управление оценками учеников</p>
          </div>
          <Button>
            <Icon name="Download" className="mr-2" size={18} />
            Экспорт
          </Button>
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
                <Label className="text-sm text-muted-foreground mb-2 block">Предмет</Label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {['Математика', 'Физика', 'Русский язык', 'Информатика'].map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold w-[250px] sticky left-0 bg-muted/50">
                      Ученик
                    </TableHead>
                    {dates.map((date) => (
                      <TableHead key={date} className="text-center font-semibold">
                        {date}
                      </TableHead>
                    ))}
                    <TableHead className="text-center font-semibold">Средний балл</TableHead>
                    <TableHead className="text-center font-semibold">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium sticky left-0 bg-background">
                        {student.name}
                      </TableCell>
                      {student.grades.map((grade, idx) => (
                        <TableCell key={idx} className="text-center">
                          <Badge variant="outline" className={getGradeColor(grade)}>
                            {grade}
                          </Badge>
                        </TableCell>
                      ))}
                      <TableCell className="text-center">
                        <span className="font-bold text-lg">{student.avg.toFixed(1)}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedStudent(student.name)}
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Добавить оценку</DialogTitle>
                              <DialogDescription>
                                Добавление оценки для {student.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="grade">Оценка</Label>
                                <Select value={newGrade} onValueChange={setNewGrade}>
                                  <SelectTrigger id="grade">
                                    <SelectValue placeholder="Выберите оценку" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="5">5 (Отлично)</SelectItem>
                                    <SelectItem value="4">4 (Хорошо)</SelectItem>
                                    <SelectItem value="3">3 (Удовлетворительно)</SelectItem>
                                    <SelectItem value="2">2 (Неудовлетворительно)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button onClick={handleAddGrade}>Добавить</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Отличники</CardTitle>
              <CardDescription>Средний балл 4.5+</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">
                {students.filter((s) => s.avg >= 4.5).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Хорошисты</CardTitle>
              <CardDescription>Средний балл 3.5-4.4</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600">
                {students.filter((s) => s.avg >= 3.5 && s.avg < 4.5).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Требуют внимания</CardTitle>
              <CardDescription>Средний балл &lt; 3.5</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-orange-600">
                {students.filter((s) => s.avg < 3.5).length}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Journal;

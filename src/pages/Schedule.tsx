import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const schedule = {
    'Понедельник': [
      { time: '08:00 - 08:45', subject: 'Математика', class: '9А', room: '201' },
      { time: '09:00 - 09:45', subject: 'Физика', class: '10Б', room: '305' },
      { time: '10:00 - 10:45', subject: 'Информатика', class: '11А', room: '401' },
      { time: '11:00 - 11:45', subject: 'Математика', class: '9Б', room: '201' },
    ],
    'Вторник': [
      { time: '08:00 - 08:45', subject: 'Физика', class: '9А', room: '305' },
      { time: '09:00 - 09:45', subject: 'Математика', class: '10Б', room: '201' },
      { time: '10:00 - 10:45', subject: 'Информатика', class: '9Б', room: '401' },
      { time: '11:00 - 11:45', subject: 'Физика', class: '11А', room: '305' },
    ],
    'Среда': [
      { time: '08:00 - 08:45', subject: 'Математика', class: '11А', room: '201' },
      { time: '09:00 - 09:45', subject: 'Информатика', class: '10Б', room: '401' },
      { time: '10:00 - 10:45', subject: 'Физика', class: '9А', room: '305' },
      { time: '11:00 - 11:45', subject: 'Математика', class: '9А', room: '201' },
    ],
    'Четверг': [
      { time: '08:00 - 08:45', subject: 'Информатика', class: '9А', room: '401' },
      { time: '09:00 - 09:45', subject: 'Физика', class: '10Б', room: '305' },
      { time: '10:00 - 10:45', subject: 'Математика', class: '11А', room: '201' },
      { time: '11:00 - 11:45', subject: 'Информатика', class: '9Б', room: '401' },
    ],
    'Пятница': [
      { time: '08:00 - 08:45', subject: 'Физика', class: '9Б', room: '305' },
      { time: '09:00 - 09:45', subject: 'Математика', class: '10Б', room: '201' },
      { time: '10:00 - 10:45', subject: 'Информатика', class: '11А', room: '401' },
      { time: '11:00 - 11:45', subject: 'Физика', class: '9А', room: '305' },
    ],
  };

  const getSubjectIcon = (subject: string) => {
    if (subject === 'Математика') return 'Calculator';
    if (subject === 'Физика') return 'Atom';
    if (subject === 'Информатика') return 'Laptop';
    return 'BookOpen';
  };

  const getSubjectColor = (subject: string) => {
    if (subject === 'Математика') return 'bg-blue-100 text-blue-700 border-blue-300';
    if (subject === 'Физика') return 'bg-purple-100 text-purple-700 border-purple-300';
    if (subject === 'Информатика') return 'bg-green-100 text-green-700 border-green-300';
    return 'bg-orange-100 text-orange-700 border-orange-300';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Расписание уроков</h1>
          <p className="text-muted-foreground">Ваше расписание на неделю</p>
        </div>

        <Tabs defaultValue="Понедельник" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            {Object.keys(schedule).map((day) => (
              <TabsTrigger key={day} value={day}>
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(schedule).map(([day, lessons]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-primary" />
                    {day}
                  </CardTitle>
                  <CardDescription>Уроки на {lessons.length} урока</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessons.map((lesson, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                            <Icon
                              name={getSubjectIcon(lesson.subject) as any}
                              className="text-primary mb-1"
                              size={24}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={getSubjectColor(lesson.subject)}>
                              {lesson.subject}
                            </Badge>
                            <Badge variant="outline">{lesson.class}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {lesson.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              Кабинет {lesson.room}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Уроков в неделю</CardTitle>
              <Icon name="Calendar" className="text-muted-foreground" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {Object.values(schedule).reduce((sum, lessons) => sum + lessons.length, 0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Разных классов</CardTitle>
              <Icon name="Users" className="text-muted-foreground" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {
                  new Set(
                    Object.values(schedule)
                      .flat()
                      .map((l) => l.class)
                  ).size
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Предметов</CardTitle>
              <Icon name="BookOpen" className="text-muted-foreground" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {
                  new Set(
                    Object.values(schedule)
                      .flat()
                      .map((l) => l.subject)
                  ).size
                }
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Распределение нагрузки</CardTitle>
            <CardDescription>Уроков по предметам за неделю</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Математика', 'Физика', 'Информатика'].map((subject) => {
                const count = Object.values(schedule)
                  .flat()
                  .filter((l) => l.subject === subject).length;
                const total = Object.values(schedule).flat().length;
                const percent = (count / total) * 100;

                return (
                  <div key={subject}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name={getSubjectIcon(subject) as any}
                          className="text-primary"
                          size={18}
                        />
                        <span className="font-medium">{subject}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{count} уроков</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Schedule;

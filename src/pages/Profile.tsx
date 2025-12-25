import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const teacher = {
    name: 'Иванов Иван Иванович',
    position: 'Учитель математики и физики',
    email: 'ivanov@school.ru',
    phone: '+7 (999) 123-45-67',
    experience: '15 лет',
    education: 'МГУ им. М.В. Ломоносова, факультет математики',
    category: 'Высшая категория',
  };

  const stats = [
    { label: 'Учеников', value: '156', icon: 'Users', color: 'text-blue-600' },
    { label: 'Классов', value: '6', icon: 'BookOpen', color: 'text-green-600' },
    { label: 'Предметов', value: '2', icon: 'Award', color: 'text-purple-600' },
    { label: 'Уроков в неделю', value: '24', icon: 'Calendar', color: 'text-orange-600' },
  ];

  const subjects = ['Математика', 'Физика'];
  const classes = ['9А', '9Б', '10А', '10Б', '11А', '11Б'];

  const achievements = [
    { title: 'Учитель года', year: '2023', description: 'Региональный конкурс' },
    { title: 'Лучший наставник', year: '2022', description: 'Школьная премия' },
    { title: 'Победитель олимпиады', year: '2021', description: 'Подготовка учеников' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Профиль преподавателя</h1>
          <p className="text-muted-foreground">Ваша информация и статистика</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                    ИИ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{teacher.name}</h2>
                  <p className="text-muted-foreground">{teacher.position}</p>
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary">
                    {teacher.category}
                  </Badge>
                </div>
                <Separator />
                <div className="w-full space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-muted-foreground" size={20} />
                    <span className="text-sm">{teacher.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-muted-foreground" size={20} />
                    <span className="text-sm">{teacher.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Briefcase" className="text-muted-foreground" size={20} />
                    <span className="text-sm">Стаж: {teacher.experience}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="GraduationCap" className="text-muted-foreground" size={20} />
                    <span className="text-sm">{teacher.education}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
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
                <CardTitle>Преподаваемые предметы</CardTitle>
                <CardDescription>Дисциплины, которые вы ведёте</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-base py-2 px-4">
                      <Icon name="BookOpen" className="mr-2" size={16} />
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Классы</CardTitle>
                <CardDescription>Классы, с которыми вы работаете</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {classes.map((cls) => (
                    <Badge
                      key={cls}
                      variant="outline"
                      className="text-base py-2 px-4 bg-primary/5"
                    >
                      {cls}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
                <CardDescription>Ваши награды и успехи</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Trophy" className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <Badge variant="outline">{achievement.year}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

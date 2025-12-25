import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Настройки</h1>
          <p className="text-muted-foreground">Управление параметрами системы</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Личные данные</CardTitle>
              <CardDescription>Обновите информацию о себе</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" defaultValue="Иван" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" defaultValue="Иванов" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="ivanov@school.ru" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
              </div>
              <Button>
                <Icon name="Save" className="mr-2" size={18} />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>Управление паролем и доступом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Текущий пароль</Label>
                <Input id="currentPassword" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Новый пароль</Label>
                <Input id="newPassword" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" />
              </div>
              <Button variant="outline">
                <Icon name="Lock" className="mr-2" size={18} />
                Изменить пароль
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Уведомления</CardTitle>
              <CardDescription>Настройте, как вы хотите получать уведомления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNotifications">Email уведомления</Label>
                  <p className="text-sm text-muted-foreground">
                    Получать уведомления на почту
                  </p>
                </div>
                <Switch id="emailNotifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="gradeNotifications">Уведомления об оценках</Label>
                  <p className="text-sm text-muted-foreground">
                    Когда ученики получают новые оценки
                  </p>
                </div>
                <Switch id="gradeNotifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="homeworkNotifications">Уведомления о заданиях</Label>
                  <p className="text-sm text-muted-foreground">
                    Когда ученики сдают домашние задания
                  </p>
                </div>
                <Switch id="homeworkNotifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="messageNotifications">Уведомления о сообщениях</Label>
                  <p className="text-sm text-muted-foreground">
                    Когда приходят новые сообщения
                  </p>
                </div>
                <Switch id="messageNotifications" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Интерфейс</CardTitle>
              <CardDescription>Настройте внешний вид системы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Язык интерфейса</Label>
                <Select defaultValue="ru">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ru">Русский</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme">Тема оформления</Label>
                <Select defaultValue="light">
                  <SelectTrigger id="theme">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Светлая</SelectItem>
                    <SelectItem value="dark">Тёмная</SelectItem>
                    <SelectItem value="auto">Автоматически</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pageSize">Элементов на странице</Label>
                <Select defaultValue="20">
                  <SelectTrigger id="pageSize">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Экспорт данных</CardTitle>
              <CardDescription>Скачайте свои данные из системы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Icon name="Download" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Экспорт оценок</p>
                    <p className="text-sm text-muted-foreground">Скачать в формате Excel</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Icon name="Download" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Экспорт расписания</p>
                    <p className="text-sm text-muted-foreground">Скачать в формате PDF</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Icon name="Download" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Экспорт всех данных</p>
                    <p className="text-sm text-muted-foreground">Полный архив в ZIP</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Скачать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

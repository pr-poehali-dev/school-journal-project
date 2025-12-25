import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Родители 9А класса',
      lastMessage: 'Спасибо за информацию!',
      time: '10:30',
      unread: 2,
      avatar: '9А',
    },
    {
      id: 2,
      name: 'Петрова Анна Ивановна',
      lastMessage: 'Когда будет родительское собрание?',
      time: '09:15',
      unread: 0,
      avatar: 'ПА',
    },
    {
      id: 3,
      name: 'Администрация школы',
      lastMessage: 'Изменения в расписании',
      time: 'Вчера',
      unread: 1,
      avatar: 'АШ',
    },
    {
      id: 4,
      name: 'Родители 10Б класса',
      lastMessage: 'Хорошо, будем на собрании',
      time: 'Вчера',
      unread: 0,
      avatar: '10Б',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Иванова Мария',
      text: 'Здравствуйте! Подскажите, пожалуйста, какие темы будут на контрольной работе по математике?',
      time: '10:15',
      isOwn: false,
    },
    {
      id: 2,
      sender: 'Вы',
      text: 'Добрый день! На контрольной будут темы: квадратные уравнения, системы уравнений и текстовые задачи. Материалы есть в учебнике на страницах 45-67.',
      time: '10:20',
      isOwn: true,
    },
    {
      id: 3,
      sender: 'Иванова Мария',
      text: 'Спасибо большое! А когда именно будет контрольная?',
      time: '10:25',
      isOwn: false,
    },
    {
      id: 4,
      sender: 'Вы',
      text: 'Контрольная запланирована на 28 декабря, в четверг.',
      time: '10:28',
      isOwn: true,
    },
    {
      id: 5,
      sender: 'Смирнов Петр',
      text: 'Спасибо за информацию!',
      time: '10:30',
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Сообщения</h1>
          <p className="text-muted-foreground">Общение с родителями и коллегами</p>
        </div>

        <Card className="h-[calc(100vh-250px)]">
          <CardContent className="p-0 h-full">
            <div className="flex h-full">
              <div className="w-80 border-r flex flex-col">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Icon
                      name="Search"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <Input placeholder="Поиск чатов..." className="pl-10" />
                  </div>
                </div>
                <ScrollArea className="flex-1">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 border-b cursor-pointer transition-colors ${
                        selectedChat === chat.id ? 'bg-accent/50' : 'hover:bg-accent/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {chat.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm truncate">{chat.name}</span>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground truncate">
                              {chat.lastMessage}
                            </p>
                            {chat.unread > 0 && (
                              <Badge className="ml-2 bg-primary text-primary-foreground">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {chats.find((c) => c.id === selectedChat)?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">
                        {chats.find((c) => c.id === selectedChat)?.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">В сети</p>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          } rounded-lg p-3`}
                        >
                          {!message.isOwn && (
                            <p className="text-xs font-medium mb-1 opacity-70">{message.sender}</p>
                          )}
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t bg-muted/20">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="Paperclip" size={20} />
                    </Button>
                    <Input
                      placeholder="Введите сообщение..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Icon name="Send" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Messages;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJoNGMxLjEgMCAyIC45IDIgMnY0YzAgMS4xLS45IDItMiAyaC00Yy0xLjEgMC0yLS45LTItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <span className="text-accent font-semibold tracking-wider">Dubai, UAE • 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Healingbowl®
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
              Выход на рынок ОАЭ
            </p>
            
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="Calendar" className="text-accent" size={24} />
                <h2 className="text-2xl font-semibold">Professional Beauty GCC — Dubai</h2>
              </div>
              <p className="text-lg mb-2">2–3 февраля 2026</p>
              <p className="text-base text-primary-foreground/80 flex items-center justify-center gap-2">
                <Icon name="MapPin" size={18} />
                Dubai Festival Arena
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold py-6 text-base"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="CalendarCheck" className="mr-2" size={20} />
                Назначить встречу
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 py-6 text-base"
                onClick={() => document.getElementById('therapy')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="FileText" className="mr-2" size={20} />
                Запросить КП кабинета
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 py-6 text-base"
                onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Users" className="mr-2" size={20} />
                Стать партнёром
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70">
              Демонстрация профессиональных наборов, методик и кабинета звуко-резонансной терапии
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">О Бренде</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-semibold text-primary">Healingbowl®</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Премиальный бренд звуко-резонансной терапии, объединяющий древние практики тибетских поющих чаш с современными научными исследованиями. Мы создаём уникальные инструменты для wellness-индустрии, которые помогают достичь глубокой релаксации и гармонизации организма.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша миссия — сделать целительную силу звука доступной для профессионалов и ценителей wellness по всему миру, начиная с премиального рынка ОАЭ.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <Icon name="Award" className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold text-primary mb-2">Премиум качество</h4>
                  <p className="text-sm text-muted-foreground">Ручная работа мастеров</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <Icon name="Globe" className="mx-auto mb-3 text-accent" size={32} />
                  <h4 className="font-semibold text-primary mb-2">Международный опыт</h4>
                  <p className="text-sm text-muted-foreground">Проверенные методики</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Sparkles" className="text-accent/30" size={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="therapy" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Звуко-резонансная терапия</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Научно обоснованная методика оздоровления через терапевтическое воздействие звуковых вибраций
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover-scale border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Brain" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Глубокая релаксация</h3>
                <p className="text-muted-foreground">
                  Снижение уровня стресса и тревожности, улучшение качества сна и общего самочувствия
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Гармонизация</h3>
                <p className="text-muted-foreground">
                  Балансировка энергетических центров, восстановление внутреннего равновесия
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Восстановление</h3>
                <p className="text-muted-foreground">
                  Улучшение концентрации, повышение жизненной энергии и работоспособности
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Кабинет звуко-резонансной терапии</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Что входит в комплект:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Профессиональные поющие чаши (7 чакр)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Специализированное акустическое оборудование</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Массажная кушетка с резонансной системой</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Набор вспомогательных инструментов</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Преимущества:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Полное обучение методикам работы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Сертификация специалистов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Маркетинговая поддержка бренда</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Гарантийное обслуживание</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="exhibition" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Professional Beauty GCC Dubai 2026</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                  <Icon name="Info" className="text-accent" size={28} />
                  Информация о выставке
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Icon name="Calendar" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-primary">Даты проведения</p>
                      <p className="text-muted-foreground">2–3 февраля 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="MapPin" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-primary">Место</p>
                      <p className="text-muted-foreground">Dubai Festival Arena, UAE</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Users" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-primary">Целевая аудитория</p>
                      <p className="text-muted-foreground">Руководители клиник, сетей отелей и СПА, салонов красоты</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
                  <Icon name="Presentation" className="text-accent" size={28} />
                  Программа демонстрации
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-semibold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Презентация продуктовой линейки</p>
                      <p className="text-sm text-muted-foreground">Профессиональные наборы и инструменты</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-semibold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Демонстрация кабинета терапии</p>
                      <p className="text-sm text-muted-foreground">Живые сессии и мастер-классы</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-semibold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Индивидуальные встречи</p>
                      <p className="text-sm text-muted-foreground">Обсуждение сотрудничества и партнёрства</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="partnership" className="py-24 px-4 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Программа партнёрства</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Станьте частью премиального wellness-бренда на рынке ОАЭ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Handshake" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Дистрибьюторы</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Эксклюзивные условия поставок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Маркетинговая поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Обучение продукту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Территориальные права</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Star" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Амбассадоры</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Представительство бренда</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">PR и медиа-поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Комиссия с продаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Участие в мероприятиях</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Агенты</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Гибкие условия работы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Высокие комиссионные</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">Демо-материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm">CRM-система поддержки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Назначить встречу</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Встретимся на Professional Beauty GCC Dubai 2026
            </p>
          </div>
          
          <Card className="border-accent/20 shadow-xl">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Имя и Фамилия *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      placeholder="Иван Петров"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base">Компания *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-12"
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32"
                    placeholder="Расскажите о вашем бизнесе и интересующих вопросах..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg bg-accent hover:bg-accent/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Мы свяжемся с вами в течение 24 часов для подтверждения встречи
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Контакты</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-accent/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Mail" className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Email</h3>
                <a href="mailto:contact@healingbowl.asia" className="text-muted-foreground hover:text-accent transition-colors">
                  contact@healingbowl.asia
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Phone" className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Телефон</h3>
                <a href="tel:+971XXXXXXXXX" className="text-muted-foreground hover:text-accent transition-colors">
                  +971 XX XXX XXXX
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Globe" className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Веб-сайт</h3>
                <a href="https://healingbowl.asia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  healingbowl.asia
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Healingbowl®</h3>
              <p className="text-primary-foreground/70">Premium Sound Healing Therapy</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/70 mb-2">© 2026 Healingbowl. Все права защищены.</p>
              <p className="text-sm text-primary-foreground/50">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

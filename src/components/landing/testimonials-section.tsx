import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Chidi Okoro',
    role: 'Pharmacy Student, UNILAG',
    content: 'SphereLearn helped me organize my study notes and practice past questions efficiently. The AI assistant is a lifesaver!',
    stars: 5,
  },
  {
    name: 'Amina Yusuf',
    role: 'JAMB Aspirant',
    content: 'The offline features are exactly what I needed. I can study anywhere without worrying about data or network issues.',
    stars: 5,
  },
  {
    name: 'Tunde Bakare',
    role: 'Computer Science, UI',
    content: 'The digital notebook combined with the AI summary tool makes revision so much faster. Highly recommended!',
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Loved by Students Across Nigeria</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how SphereLearn is changing the way students prepare for their exams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border/50">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(t.stars)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

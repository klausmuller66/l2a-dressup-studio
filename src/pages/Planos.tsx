import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';

const Planos = () => {
  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para experimentar',
      icon: Sparkles,
      features: [
        '5 transformações por mês',
        'Qualidade padrão',
        'Sem referências de roupa',
        'Suporte por email'
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      name: 'Pro',
      price: 'R$ 19',
      period: '/mês',
      description: 'Para uso regular',
      icon: Crown,
      features: [
        '50 transformações por mês',
        'Alta qualidade',
        'Referências de roupas incluídas',
        'Processamento prioritário',
        'Suporte prioritário'
      ],
      cta: 'Assinar Pro',
      popular: true
    },
    {
      name: 'Unlimited',
      price: 'R$ 39',
      period: '/mês',
      description: 'Para profissionais',
      icon: Zap,
      features: [
        'Transformações ilimitadas',
        'Máxima qualidade',
        'Todas as referências',
        'Processamento ultra-rápido',
        'Suporte 24/7',
        'API access'
      ],
      cta: 'Assinar Unlimited',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Escolha seu <span className="text-primary">Plano</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme suas fotos com inteligência artificial. 
            Escolha o plano perfeito para suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary ring-2 ring-primary/20 scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-primary-foreground' 
                        : 'variant-outline'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem acesso completo às funcionalidades básicas
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Processamento seguro</span>
            <span>✓ Dados privados</span>
            <span>✓ Sem anúncios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
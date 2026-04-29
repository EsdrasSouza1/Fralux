import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Zap, Cog, ShieldCheck, Wrench, Building2, MapPin, Globe,
  CheckCircle2, Phone, Mail, MessageCircle, Snowflake, Wind,
  Thermometer, Droplets, Factory, ArrowRight,
} from "lucide-react";
import heroPainel from "@/assets/hero-painel.jpg";
import painel1 from "@/assets/painel-1.jpeg";
import painel2 from "@/assets/painel-2.jpeg";
import painel3 from "@/assets/painel-3.jpeg";
import painel4 from "@/assets/painel-4.jpeg";
import painel5 from "@/assets/painel-5.jpeg";
import painel6 from "@/assets/painel-6.jpeg";
import fraluxLogo from "@/assets/fralux-logo.png";

const WHATSAPP = "https://wa.me/5519983890975";
const PHONE_DISPLAY = "(19) 98389-0975";
const EMAIL = "contato@fralluxautomacao.com.br";

const services = [
  { icon: Cog, title: "Montagem e Retrofit", desc: "Projeto e modernização de painéis elétricos sob medida." },
  { icon: Wrench, title: "Manutenção Industrial", desc: "Instalação e manutenção elétrica em equipamentos industriais." },
  { icon: ShieldCheck, title: "Assistência Técnica", desc: "Atendimento técnico ágil e especializado para sua operação." },
  { icon: Building2, title: "Adequação a Normas", desc: "Conformidade com as principais normas regulamentadoras." },
  { icon: Zap, title: "Comércio de Materiais", desc: "Materiais elétricos em geral com qualidade garantida." },
  { icon: Factory, title: "Consultoria Técnica", desc: "Soluções completas para o seu negócio." },
];

const sectors = [
  { icon: Snowflake, label: "Refrigeração Industrial" },
  { icon: Wind, label: "Compressores" },
  { icon: Droplets, label: "Condensadores Evaporativos" },
  { icon: Thermometer, label: "Túnel de Congelamento" },
  { icon: Snowflake, label: "Câmaras Frias" },
  { icon: Factory, label: "Máquinas de Gelo" },
  { icon: Droplets, label: "Sistemas de Bombas" },
];

const projects = [
  { src: painel3, title: "Painel de Refrigeração 220V" },
  { src: painel6, title: "Painel de Comando 380V" },
  { src: painel2, title: "Comando com IHM e Segurança" },
  { src: painel5, title: "Painel com Soft-Starter" },
  { src: painel1, title: "Montagem Interna em Inox" },
  { src: painel4, title: "Painel de Controle Compacto" },
];

const Logo = ({ className = "h-24 md:h-28" }: { className?: string }) => (
  <img
    src={fraluxLogo}
    alt="Fralux - Serviços Elétricos e Automação"
    className={`${className} w-auto object-contain`}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-32 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Sobre</a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Serviços</a>
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Projetos</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contato</a>
          </nav>
          <Button asChild className="bg-gradient-red shadow-red hover:opacity-90">
            <a href={WHATSAPP} target="_blank" rel="noopener">
              <MessageCircle className="mr-2 h-4 w-4" /> Orçamento
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container relative grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground">
                Atendemos todo o Brasil
              </span>
            </div>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Soluções completas em{" "}
              <span className="text-gradient-red">elétrica</span> e{" "}
              <span className="text-gradient-red">automação</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Projetos, montagem de painéis e consultoria técnica para o seu negócio,
              com profissionais altamente qualificados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-red shadow-red hover:opacity-90 text-base h-12 px-8">
                <a href={WHATSAPP} target="_blank" rel="noopener">
                  <MessageCircle className="mr-2 h-5 w-5" /> Solicitar Orçamento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-border bg-secondary/40 hover:bg-secondary text-base px-8">
                <a href="#projetos">
                  Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Araras / SP</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Atendimento Nacional</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-red opacity-20 blur-3xl" />
            <img
              src={heroPainel}
              alt="Painel elétrico industrial Fralux"
              width={1536} height={1024}
              className="relative rounded-2xl border border-border shadow-card-soft"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Segurança", sub: "e Confiança" },
            { icon: Cog, title: "Tecnologia", sub: "e Qualidade" },
            { icon: Building2, title: "Profissionais", sub: "Qualificados" },
          ].map((it) => (
            <div key={it.title} className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold leading-tight">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img src={painel1} alt="Painel elétrico Fralux" loading="lazy"
              className="w-full rounded-2xl border border-border shadow-card-soft" />
          </div>
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Sobre a Fralux</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Especialistas em montagem, instalação e manutenção elétrica
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A Fralux é uma empresa de montagem, instalação, manutenção elétrica e
              automação. Pronta para resolver as necessidades do seu negócio com
              profissionais altamente qualificados e atendimento em todo o Brasil.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-black text-gradient-red">+10</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gradient-red">100%</div>
                <div className="text-sm text-muted-foreground">Compromisso técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-card border-y border-border py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">O que fazemos</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Serviços especializados</h2>
            <p className="mt-4 text-muted-foreground">
              Uma estrutura completa para projetar, montar e manter sistemas elétricos e de automação.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="group relative overflow-hidden border-border bg-gradient-card p-6 transition-smooth hover:border-primary/50 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-red group-hover:text-primary-foreground group-hover:shadow-red">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atuações */}
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Principais atuações</div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Setores onde entregamos resultado
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-gradient-card p-5 transition-smooth hover:border-primary/50">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-card border-y border-border py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Nossos projetos</div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Painéis montados pela Fralux
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada painel é projetado e montado com rigor técnico, organização e segurança.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-background transition-smooth hover:border-primary/50 hover:shadow-red">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.src} alt={p.title} loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div className="font-semibold">{p.title}</div>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="container py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-hero p-10 md:p-16">
          <div className="absolute inset-0 circuit-bg opacity-30" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Pronto para o próximo <span className="text-gradient-red">projeto</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fale com nossa equipe e receba uma proposta sob medida para o seu negócio.
              </p>
              <div className="mt-8 space-y-4">
                <a href={WHATSAPP} target="_blank" rel="noopener"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition-smooth hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-red shadow-red">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <div className="font-bold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition-smooth hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</div>
                    <div className="font-bold break-all">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Localização</div>
                    <div className="font-bold">Araras / SP — Atendimento Brasil</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-background/40 p-8 backdrop-blur">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-red shadow-glow animate-pulse-glow">
                <MessageCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Entre em contato</div>
                <div className="mt-2 text-3xl font-black">{PHONE_DISPLAY}</div>
              </div>
              <Button asChild size="lg" className="w-full bg-gradient-red shadow-red hover:opacity-90 h-12 text-base">
                <a href={WHATSAPP} target="_blank" rel="noopener">
                  Conversar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <Logo className="h-28" />
          <div className="text-sm text-muted-foreground text-center md:text-right space-y-2">
            <div>© {new Date().getFullYear()} Fralux Serviços Elétricos e Automação. Todos os direitos reservados.</div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-end">
              <Dialog>
                <DialogTrigger className="font-medium text-foreground/80 hover:text-primary transition-smooth underline-offset-4 hover:underline">
                  Política de Privacidade
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black">
                      Política de <span className="text-gradient-red">Privacidade</span>
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="max-h-[65vh] pr-4">
                    <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                      <p>
                        A <strong className="text-foreground">Fralux Serviços Elétricos e Automação</strong> respeita
                        a sua privacidade e está comprometida com a proteção dos dados pessoais
                        coletados em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                      </p>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">1. Coleta de Informações</h3>
                        <p>
                          Coletamos informações fornecidas voluntariamente por você, como nome, e-mail,
                          telefone e mensagens enviadas através dos nossos canais de contato (formulários,
                          WhatsApp e e-mail), com o propósito exclusivo de responder solicitações e elaborar orçamentos.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">2. Uso das Informações</h3>
                        <p>Os dados coletados são utilizados para:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Responder dúvidas e solicitações de orçamento;</li>
                          <li>Prestar serviços contratados;</li>
                          <li>Enviar comunicações comerciais relacionadas aos nossos serviços;</li>
                          <li>Cumprir obrigações legais e contratuais.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">3. Compartilhamento de Dados</h3>
                        <p>
                          A Fralux não vende, aluga ou compartilha seus dados pessoais com terceiros,
                          exceto quando necessário para a prestação do serviço contratado ou por exigência legal.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">4. Armazenamento e Segurança</h3>
                        <p>
                          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
                          contra acesso não autorizado, perda, alteração ou divulgação indevida.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">5. Cookies</h3>
                        <p>
                          Este site pode utilizar cookies para melhorar a experiência de navegação.
                          Você pode desativá-los nas configurações do seu navegador.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">6. Direitos do Titular</h3>
                        <p>
                          Conforme a LGPD, você pode solicitar a qualquer momento acesso, correção,
                          atualização ou exclusão dos seus dados pessoais, entrando em contato pelo
                          e-mail <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-foreground font-bold mb-2">7. Alterações nesta Política</h3>
                        <p>
                          Esta Política de Privacidade poderá ser atualizada periodicamente.
                          Recomendamos que você a revise sempre que utilizar nossos serviços.
                        </p>
                      </div>

                      <p className="pt-2 border-t border-border text-xs">
                        Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}.
                      </p>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              <span className="text-border">•</span>
              <span>
                Desenvolvido por{" "}
                <a
                  href="https://instagram.com/souza.web_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline transition-smooth"
                >
                  @souza.web_
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-red shadow-glow animate-pulse-glow transition-smooth hover:scale-110">
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;

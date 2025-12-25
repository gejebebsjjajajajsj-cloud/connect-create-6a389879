import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <section className="relative mx-4 w-full max-w-xl rounded-2xl border border-border bg-card/80 p-8 text-center shadow-xl shadow-primary/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--accent))_0,_hsl(var(--background))_55%)] opacity-60" />
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            atendimento exclusivo
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Fale comigo direto no <span className="text-primary">WhatsApp</span>
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Clique no botão abaixo para ver minhas opções de chamada de vídeo e packs de fotos e vídeos, tudo pelo
            WhatsApp.
          </p>
        </header>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="whatsapp">
            <Link to="/ofertas" aria-label="Ver opções e chamar no WhatsApp">
              Entrar pelo WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { WHATSAPP_VIDEO_CALL } from "@/config/whatsapp";

const Offers = () => {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] bg-background px-4 py-6 sm:px-5 sm:py-10">
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 animate-fade-in">
        {/* Perfil / capa */}
        <header className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 shadow-md shadow-primary/20">
          {/* Banner */}
          <div className="h-32 w-full bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_hsl(var(--background))_70%)] sm:h-40" />

          {/* Bloco com foto + infos principais */}
          <div className="relative flex flex-col gap-4 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
            {/* Foto de perfil sobreposta ao banner */}
            <div className="-mt-10 flex items-end justify-between gap-4 sm:-mt-12">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="h-20 w-20 overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-md shadow-primary/30 sm:h-24 sm:w-24">
                  <img
                    src="/placeholder.svg"
                    alt="Foto de perfil da modelo de encontros presenciais"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/90">
                    Perfil de encontros
                  </p>
                  <h1 className="text-xl font-semibold tracking-tight text-primary-foreground sm:text-2xl">
                    Marque seu encontro comigo pelo WhatsApp
                  </h1>
                  <p className="text-xs text-primary-foreground/90 sm:text-sm">
                    Discrição total, sigilo e tudo combinado direto no chat.
                  </p>
                </div>
              </div>
            </div>

            {/* Resumo rápido em pílulas, sem textão */}
            <div className="mt-1 flex flex-wrap gap-2 text-[0.7rem] text-primary-foreground/90 sm:text-xs">
              <span className="rounded-full bg-background/40 px-3 py-1 font-medium">
                Encontros presenciais
              </span>
              <span className="rounded-full bg-background/40 px-3 py-1 font-medium">
                Pagamento adiantado via PIX
              </span>
              <span className="rounded-full bg-background/40 px-3 py-1 font-medium">
                Combinações só pelo WhatsApp
              </span>
            </div>
          </div>
        </header>

        {/* Área principal do perfil com botão de encontro bem destacado */}
        <section className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-5 shadow-md shadow-primary/15 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/35 hover-scale">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_hsl(var(--accent))_0,_hsl(var(--background))_80%)] opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                Encontros & programas
              </h2>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Clique no botão abaixo, fale comigo no WhatsApp e combinamos valores,
                local e horário do seu encontro.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-2 sm:w-52">
              <Button asChild size="lg" variant="whatsapp" className="w-full text-base sm:text-lg">
                <a
                  href={WHATSAPP_VIDEO_CALL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chamar no WhatsApp para marcar um encontro presencial"
                >
                  Quero marcar um encontro
                </a>
              </Button>
              <p className="text-center text-[0.68rem] leading-snug text-muted-foreground sm:text-xs">
                Só marco encontro com pagamento adiantado via PIX
                (50% ou 100% do valor). É por questão de segurança.
                Se não aceitar pagar ao menos metade antes, por favor não chame.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Offers;

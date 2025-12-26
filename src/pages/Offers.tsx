import { Button } from "@/components/ui/button";
import { WHATSAPP_VIDEO_CALL } from "@/config/whatsapp";

const Offers = () => {
  return (
    <main className="flex bg-background px-4 py-6 sm:px-5 sm:py-8">
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 animate-fade-in">
        {/* Banner / capa de perfil */}
        <header className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 shadow-md shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_hsl(var(--background))_70%)] opacity-80" />

          <div className="relative flex flex-col items-center gap-4 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-7">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Foto de perfil - depois você pode trocar o src pela sua foto */}
              <div className="h-20 w-20 overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-md shadow-primary/30 sm:h-24 sm:w-24">
                <img
                  src="/placeholder.svg"
                  alt="Foto de perfil da modelo para encontros presenciais"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary-foreground/90">
                  Encontros presenciais
                </p>
                <h1 className="text-xl font-semibold tracking-tight text-primary-foreground sm:text-2xl">
                  Perfil de encontros &mdash; marque comigo pelo WhatsApp
                </h1>
                <p className="text-xs text-primary-foreground/90 sm:text-sm">
                  Discrição, sigilo e tudo combinado diretamente no chat.
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col items-center gap-1 text-[0.65rem] text-primary-foreground/90 sm:items-end">
              <span className="rounded-full bg-background/30 px-3 py-1 font-medium">
                Pagamento adiantado via PIX
              </span>
              <span>Metade ou valor total, combinado na conversa.</span>
            </div>
          </div>
        </header>

        {/* Bloco simples com regras + botão */}
        <article className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-5 shadow-md shadow-primary/15 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/35 hover-scale">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_hsl(var(--accent))_0,_hsl(var(--background))_80%)] opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                Regras rápidas (leia antes de chamar)
              </h2>
              <ul className="space-y-1 text-xs text-muted-foreground sm:text-sm">
                <li>&bull; Só marco encontro com pagamento adiantado via PIX.</li>
                <li>&bull; Você escolhe: pagar 50% antes ou 100% do valor adiantado.</li>
                <li>&bull; É por questão de segurança, tanto minha quanto sua.</li>
                <li>&bull; Se não aceitar pagar pelo menos metade antes, por favor não chame.</li>
              </ul>
            </div>

            <div className="flex flex-col items-stretch gap-2 sm:w-48">
              <Button asChild size="lg" variant="whatsapp" className="w-full">
                <a
                  href={WHATSAPP_VIDEO_CALL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chamar no WhatsApp para marcar um encontro presencial"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
              <p className="text-center text-[0.65rem] text-muted-foreground">
                Público mais direto: entra, clica no botão e me chama no chat.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Offers;

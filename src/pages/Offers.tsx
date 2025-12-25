import { Button } from "@/components/ui/button";
import { WHATSAPP_PACKS, WHATSAPP_VIDEO_CALL } from "@/config/whatsapp";

const Offers = () => {
  return (
    <main className="flex min-h-screen items-center bg-background px-4 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 py-10 sm:py-12 lg:py-16">
        <header className="text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Escolha seu pacote e chame no WhatsApp
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Tenho opções de <strong className="font-semibold text-foreground">chamada de vídeo</strong> e
            <strong className="font-semibold text-foreground"> packs exclusivos de fotos e vídeos</strong>.
            Escolha o que combina mais com você e me chama no WhatsApp.
          </p>
        </header>

        <section className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">
          <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-md shadow-primary/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--accent))_0,_hsl(var(--background))_70%)] opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Chamada de vídeo</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Chamadas de vídeo particulares, com horário combinado e atenção total pra você.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• Tempo de chamada flexível</li>
                <li>• Combinações personalizadas</li>
                <li>• Atendimento direto comigo, sem intermediários</li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6">
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={WHATSAPP_VIDEO_CALL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chamar no WhatsApp para chamada de vídeo"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </article>

          <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-md shadow-primary/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_hsl(var(--background))_70%)] opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Packs de fotos e vídeos</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Conteúdos exclusivos, organizados em packs para você escolher o que mais gosta.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>• Packs temáticos e personalizados</li>
                <li>• Fotos e vídeos em alta qualidade</li>
                <li>• Entrega rápida direto no WhatsApp</li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6">
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={WHATSAPP_PACKS}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chamar no WhatsApp para packs de fotos e vídeos"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Offers;

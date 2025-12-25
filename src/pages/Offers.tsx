import { Button } from "@/components/ui/button";
import { WHATSAPP_PACKS, WHATSAPP_VIDEO_CALL } from "@/config/whatsapp";

const Offers = () => {
  return (
    <main className="flex bg-background px-4 py-4 sm:px-5 sm:py-5">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <header className="text-center">
          <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Escolha seu pacote e chame no WhatsApp
          </h1>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Tenho opções de <strong className="font-semibold text-foreground">chamada de vídeo</strong> e
            <strong className="font-semibold text-foreground"> packs exclusivos de fotos e vídeos</strong>.
            Escolha o que combina mais com você e me chama no WhatsApp.
          </p>
        </header>

        <section className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/90 p-4 shadow-md shadow-primary/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--accent))_0,_hsl(var(--background))_70%)] opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Chamada de vídeo (somente compra)</h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Botão exclusivo para quem quer <strong className="font-semibold text-foreground">comprar uma chamada de vídeo</strong>
                direto comigo pelo WhatsApp.
              </p>
              <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground sm:text-sm">
                <li>• Tempo de chamada flexível</li>
                <li>• Combinações personalizadas</li>
                <li>• Atendimento direto comigo, sem intermediários</li>
              </ul>
            </div>
            <div className="mt-3 sm:mt-4">
              <Button asChild size="default" variant="whatsapp">
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

          <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/90 p-4 shadow-md shadow-primary/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_hsl(var(--background))_70%)] opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Packs de fotos e vídeos</h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Conteúdos exclusivos, organizados em packs para você escolher o que mais gosta.
              </p>
              <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground sm:text-sm">
                <li>• Packs temáticos e personalizados</li>
                <li>• Fotos e vídeos em alta qualidade</li>
                <li>• Entrega rápida direto no WhatsApp</li>
              </ul>
            </div>
            <div className="mt-3 sm:mt-4">
              <Button asChild size="default" variant="whatsapp">
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

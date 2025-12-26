import { Button } from "@/components/ui/button";
import { WHATSAPP_VIDEO_CALL } from "@/config/whatsapp";

const Offers = () => {
  return (
    <main className="flex bg-background px-4 py-6 sm:px-5 sm:py-8">
      <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 animate-fade-in">
        <header className="space-y-2 text-center">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.2em] text-accent-foreground/80">
            Encontros presenciais via WhatsApp
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Marque seu encontro comigo pelo WhatsApp
          </h1>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Todo agendamento &eacute; feito diretamente comigo pelo WhatsApp. Leia com aten&ccedil;&atilde;o as regras abaixo
            antes de chamar.
          </p>
        </header>

        <article className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-5 shadow-md shadow-primary/15 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/35 hover-scale">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_hsl(var(--background))_75%)] opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Encontros &bull; Programa discreto
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Como funcionam os encontros
              </h2>
              <p className="text-sm text-muted-foreground sm:text-[0.95rem]">
                Voc&ecirc; chama no WhatsApp, combinamos os detalhes do encontro (local, hor&aacute;rio, dura&ccedil;&atilde;o) e
                eu passo a chave PIX para pagamento adiantado.
              </p>
            </div>

            <section aria-label="Regras importantes para marcar encontro" className="space-y-3 rounded-xl bg-background/70 p-3 sm:p-4">
              <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                Regras de pagamento (leia com aten&ccedil;&atilde;o)
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  &bull; <strong className="font-semibold text-foreground">S&oacute; aceito programa com pagamento adiantado via PIX.</strong>
                </li>
                <li>
                  &bull; Voc&ecirc; pode escolher entre pagar <strong className="font-semibold text-foreground">50% do valor</strong> antes
                  ou <strong className="font-semibold text-foreground">100% adiantado</strong>.
                </li>
                <li>
                  &bull; O pagamento adiantado &eacute; <strong className="font-semibold text-foreground">por quest&atilde;o de seguran&ccedil;a</strong>,
                  tanto minha quanto sua.
                </li>
                <li>
                  &bull; <strong className="font-semibold text-foreground">Se n&atilde;o aceitar pagar pelo menos metade antes, por favor n&atilde;o chame.</strong>
                </li>
              </ul>
            </section>

            <p className="text-[0.7rem] text-muted-foreground sm:text-xs">
              Ao chamar no WhatsApp voc&ecirc; confirma que leu e concorda com essas condi&ccedil;&otilde;es.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[0.7rem] text-muted-foreground sm:text-xs">
              <p className="font-medium text-foreground">Atendimento discreto e combinado diretamente comigo.</p>
              <p>Conversa, combina&ccedil;&otilde;es e detalhes s&oacute; pelo WhatsApp.</p>
            </div>

            <Button asChild size="default" variant="whatsapp">
              <a
                href={WHATSAPP_VIDEO_CALL}
                target="_blank"
                rel="noreferrer"
                aria-label="Chamar no WhatsApp para marcar um encontro presencial"
              >
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Offers;

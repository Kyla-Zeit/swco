"use client";

export function UpcomingEventsSection() {
  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Upcoming Events</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Check back for new dates. In the meantime, here are highlights from past events.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="aspect-[9/16]">
              {/* Replace the src values with your real embeds */}
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/p/XXXXXXXXX/embed"
                title="Event highlight 1"
                allowTransparency
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/p/YYYYYYYYY/embed"
                title="Event highlight 2"
                allowTransparency
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/p/ZZZZZZZZZ/embed"
                title="Event highlight 3"
                allowTransparency
              />
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/your-handle/"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Follow us for event updates →
          </a>
        </div>
      </div>
    </section>
  );
}

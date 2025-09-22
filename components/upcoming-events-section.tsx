"use client";

export function UpcomingEventsSection() {
  return (
    <section id="events" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Events</h2>
        <p className="mt-2 text-white/80">Check back for events</p>
        <p className="text-white/70 text-sm">
          There are no currently scheduled upcoming events. Watch this space and our social media for new dates.
        </p>

        {/* Highlights (replace these iframes with your real embeds) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/10">
            <iframe
              className="w-full h-full"
              src=""
              title="Event highlight 1"
            />
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/10">
            <iframe
              className="w-full h-full"
              src=""
              title="Event highlight 2"
            />
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white/10">
            <iframe
              className="w-full h-full"
              src=""
              title="Event highlight 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

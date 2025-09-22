// app/journey/page.tsx
export const metadata = {
  title: "The Journey — From Displacement to Empowerment | Samawada",
  description:
    "Carrying Something Good — a personal journey of resilience, hope, and change that led to founding Samawada.",
};

export default function JourneyPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">
            The Journey
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">From Displacement to Empowerment</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            “Carrying Something Good” — A Journey of Resilience, Hope, and Change
          </p>
        </header>

        <article className="mx-auto max-w-3xl space-y-6 leading-relaxed text-foreground/90">
          <p>
            I was born in Somalia, a country once celebrated for its rich culture, deep history, and breathtaking
            landscapes. But in the early 1990s, everything changed. The country I loved descended into chaos, and
            millions of people were forced to flee their homes. The devastating war destroyed not only
            infrastructure—schools, hospitals, roads, and markets—but also shattered lives, leaving families without
            the necessities of life.
          </p>

          <p>
            My own family was among those displaced. We fled our hometown seeking safety, finding refuge in neighboring
            countries. In the midst of the turmoil, we were fortunate to be offered an opportunity to immigrate to
            Canada as refugees in the early 1990s. This new chapter provided us with security and hope for a better
            future. But the journey to adapt to a new life—learning a new language, adjusting to a new culture, and
            rebuilding from the ground up—was not easy. Though grateful for the opportunities Canada provided, I could
            never forget the struggles of those I left behind, especially the women, children, and families still
            enduring hardship in Somalia.
          </p>

          <p>
            As I built my new life, the memories of my homeland remained vivid, and the desire to make a difference
            only grew stronger. In 2015, I returned to Somalia for the first time since leaving. I had heard of the
            country’s ongoing struggles, but nothing could have prepared me for the reality I encountered. Reconnecting
            with relatives and speaking with local women who had endured years of hardship, I was struck by their
            incredible resilience in the face of adversity. Through these conversations, I gained a deeper understanding
            of the gender inequality that pervaded every aspect of life. Women were often denied access to education,
            healthcare, and economic opportunities. They were relegated to traditional roles with little opportunity to
            influence decisions that affected their lives. In a society where men held most of the power, the voices of
            women were marginalized—or silenced altogether.
          </p>

          <p>
            I also learned of the devastating impact of climate change. Prolonged droughts and unpredictable weather
            patterns had destroyed crops, drained water sources, and exacerbated food insecurity. Many families
            struggled to survive, while youth—both men and women—faced limited job opportunities, often in unsafe and
            exploitative conditions.
          </p>

          <p>
            This visit was a turning point for me. The poverty and hardship I witnessed were overwhelming, but so too
            was the strength and determination of the people, especially the women. Many were running small businesses,
            initiating community projects, and working tirelessly to improve their children’s lives. I realized how
            critical it was to empower these women, their families, and their communities—not only to address immediate
            needs but to create sustainable paths toward long-term development.
          </p>

          <p>
            In the years that followed, I felt a deep calling to contribute to positive change in Somalia. The
            challenges the country faced were too great to ignore. I asked myself, what can I do to help? In 2018, I
            founded Samawada, a community bridge-building organization with a mission to create lasting change in
            Somalia. The name Samawada means “carrying something good,” which reflects the organization’s vision: to
            bring hope, opportunity, and lasting solutions to communities in need. The creation of Samawada is deeply
            personal—it grew from the tragic displacement of my family and the desire to make a tangible difference. But
            it is also a call to action. A call to fight against inequality, environmental degradation, and the forces
            that trap communities in cycles of poverty. Through Samawada, we are working to create opportunities,
            restore dignity, and build a future where the people of Somalia—especially women—can thrive.
          </p>
        </article>
      </div>
    </main>
  );
}

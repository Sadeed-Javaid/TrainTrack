interface Feature {
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  { title: 'Manage clients', description: 'Every client, their goals, and their package status in one list.', color: '#E8603C' },
  { title: 'Log sessions', description: 'Record a session in seconds — notes, date, done.', color: '#7FB69E' },
  { title: 'Track progress', description: "See how far each client's come, at a glance.", color: '#E3A33E' },
];

function Features() {
  return (
    <section className="bg-white border-y border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink text-center mb-14">
          Everything you need, nothing you don't
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4"
                style={{ backgroundColor: feature.color, opacity: 0.15 }}
              />
              <h3 className="font-display text-xl font-semibold text-ink">{feature.title}</h3>
              <p className="font-body text-ink/60 text-sm mt-2 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CtaSection } from '../components/sections/CtaSection';
import { teamMembers } from '../data/content';

const PageHero: React.FC<{ title: string; subtitle: string; img: string; imgAlt: string }> = ({
  title,
  subtitle,
  img,
  imgAlt,
}) => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={img} alt={imgAlt} className="w-full h-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-bark-900/75" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl text-wood-50 mb-4">{title}</h1>
        <div className="h-0.5 w-12 bg-wood-400 mb-5" />
        <p className="text-wood-200 text-lg max-w-xl leading-relaxed">{subtitle}</p>
      </motion.div>
    </div>
  </section>
);

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About — Big Wood Works';
  }, []);

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' });

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A small team of dedicated craftspeople making furniture that matters — since 1996."
        img="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80"
        imgAlt="Craftsman working in the workshop"
      />

      {/* Story */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-wood-500 text-sm tracking-[0.15em] uppercase mb-4 block">Our story</span>
            <h2 className="text-4xl md:text-5xl text-bark-900 leading-tight mb-6">
              Where every piece of wood gets a second life
            </h2>
            <div className="h-0.5 w-12 bg-wood-500 mb-6" />
            <p className="text-bark-600 leading-relaxed mb-5">
              Big Wood Works began in 1996 when Mike Dawson set up a bench in a rented shed
              in Marrickville. He'd spent three years in Tasmania learning under a
              fifth-generation craftsman and came back to Sydney with one goal: to make
              genuinely excellent furniture accessible to people who love wood.
            </p>
            <p className="text-bark-600 leading-relaxed mb-5">
              Today, our workshop occupies 1,200 square metres in Sydney's inner west. We've
              grown to a team of twelve — cabinetmakers, designers, finishers, and
              installers — but the approach hasn't changed. Every commission is personal,
              every piece is made by hand, and every client leaves with something they'll
              treasure for generations.
            </p>
            <p className="text-bark-600 leading-relaxed">
              We use only sustainably harvested Australian hardwoods. We don't rush. We
              don't cut corners. And we stand behind everything we make.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Interior of the Big Wood Works Marrickville workshop"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-wood-100 border border-wood-200 p-6 hidden sm:block">
              <div className="text-3xl text-wood-700 font-display">12</div>
              <div className="text-bark-600 text-xs tracking-wide mt-0.5">Craftspeople on the team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Our values"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Honesty',
                desc: 'We give you a realistic picture of what is possible, what it costs, and how long it takes — before we start.',
              },
              {
                title: 'Craft first',
                desc: "We won't move to the next step until the current one is right. Shortcuts cost more in the long run.",
              },
              {
                title: 'Sustainable timber',
                desc: 'Every species we use is sourced from certified, sustainably managed Australian forests.',
              },
              {
                title: 'Lasting relationships',
                desc: "Many of our clients have commissioned multiple pieces over the years. That's the relationship we aim for.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-cream p-7 border-l-2 border-wood-400">
                <h3 className="text-lg text-bark-900 mb-3">{title}</h3>
                <p className="text-bark-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="The people"
            title="Meet the team"
            subtitle="A small group of specialists who've dedicated their working lives to the craft."
            align="center"
          />
          <div
            ref={teamRef}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl text-bark-900 mb-0.5">{member.name}</h3>
                <p className="text-wood-600 text-sm tracking-wide mb-3">{member.role}</p>
                <p className="text-bark-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default AboutPage;

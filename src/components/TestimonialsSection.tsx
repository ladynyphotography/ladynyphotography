import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Gail Marshall',
    role: 'Events',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuzExKDpRRN5qkKHnJdPhLzT6nH4x4St-bw&s',
    quote:
      'Nykisha Gaines is the creative force behind LadyNy Photography, where passion meets precision and every moment is transformed into timeless art. With a natural eye for detail and a deep love for storytelling through imagery, Nykisha brings a unique, creative touch to every session.  Her work is known for its high-quality finish and ability to capture authentic emotion, ensuring each photo feels both personal and unforgettable. Clients appreciate not only her artistic vision but also her professionalism and efficiency—delivering beautifully edited images with a quick turnaround time, often within just 10 days.  Whether she’s behind the lens capturing life’s biggest milestones or the smallest candid moments, Nykisha is committed to excellence, making every experience with LadyNy Photography both seamless and memorable.',
    stars: 5,
    event: 'Events',
  },
  {
    name: 'Keyshanna K ',
    role: 'R&B artist',
    image: 'https://i.ytimg.com/vi/X7fbcV_TTD0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3VHVg14tUK4hvKfJnSzhUaOyJ9w',
    quote:
      'I had an amazing experience working with Lady Ny Photography, at my recent singing performance. From start to finish, they were incredibly professional, kind, and easy to work with. Their energy made me feel comfortable on stage, which really showed in the photos. What impressed me most was the quick turnaround time I received my images the very next day, and the quality was outstanding. Every shot captured the emotion and essence of my performance perfectly. I highly recommend their services to anyone looking for top-tier photography.',
    stars: 5,
    event: 'Portrait',
  },
  {
    name: 'Katrice Cornett',
    role: 'CEO/Founder T.H.S.A. Records, LLC',
    image: 'https://i.ytimg.com/vi/X7fbcV_TTD0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3VHVg14tUK4hvKfJnSzhUaOyJ9w',
    quote:
      'We are beyond grateful for the incredible work of Lady Ny Photography during our T.H.S.A. Records, LLC Spring/Summer Catalog Release Concert! 📸✨ From the moment she arrived, Lady Ny brought such a warm, professional, and welcoming presence that made everyone feel comfortable and celebrated. She did a phenomenal job capturing not just photos, but the true essence, spirit, energy, and heartfelt moments of the entire event. Every image reflects the joy, passion, worship, excellence, and love that filled the room. Her creativity, knowledge, attention to detail, and ability to engage with everyone made the experience even more special. She has a beautiful eye for storytelling through photography, and it truly shows in her work. If you are looking for a photographer who is professional, friendly, creative, and reasonably priced, I highly recommend Lady Ny Photography. We will definitely be working with her again in the future! Thank you, Lady Ny Photography, for helping us preserve memories that we will treasure for years to come. 💛',
    stars: 5,
    event: 'Portrait',
  },
  
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-gold-400 text-xs tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gold-400" />
            Client Love
            <span className="w-8 h-px bg-gold-400" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Words from the Heart
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-charcoal-400 max-w-xl mx-auto leading-relaxed">
            The greatest honor is hearing how these photographs have become irreplaceable pieces of
            someone's story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`reveal relative bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${
                index === 1 ? 'lg:mt-8' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote
                size={40}
                className="text-gold-500/20 mb-4 -ml-1"
                fill="currentColor"
              />

              <p className="font-body text-charcoal-300 leading-relaxed text-sm mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-charcoal-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold-500/30"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="font-serif text-white text-sm font-medium leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-charcoal-500 text-xs mt-0.5 tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating count={testimonial.stars} />
                  <span className="font-body text-gold-500/60 text-xs tracking-widest uppercase">
                    {testimonial.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal relative bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote
                size={36}
                className="text-gold-500/20 mb-4 -ml-1"
                fill="currentColor"
              />

              <p className="font-body text-charcoal-300 leading-relaxed text-sm mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-charcoal-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold-500/30"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="font-serif text-white text-sm font-medium leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-charcoal-500 text-xs mt-0.5 tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating count={testimonial.stars} />
                  <span className="font-body text-gold-500/60 text-xs tracking-widest uppercase">
                    {testimonial.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <p className="font-body text-charcoal-500 text-sm mb-2">
            Rated 5 stars by many clients
          </p>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
            ))}
          </div>
          <a href="#contact" className="btn-gold">
            Join Happy Clients
          </a>
        </div>
      </div>
    </section>
  );
}

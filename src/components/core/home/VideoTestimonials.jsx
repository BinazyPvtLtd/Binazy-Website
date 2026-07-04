import video1 from "@/assets/testimonial1.mp4";
import video2 from "@/assets/testimonial2.mp4";
import { PlayCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "College Drishti",
    role: "Education Platform",
    quote:
      "The platform made it easier for students to explore colleges and courses with confidence. The clean design, smooth experience, and reliable performance have helped us reach more students and strengthen our digital presence.",
    video: video1,
  },
  {
    id: 2,
    name: "CLO Fashion Store",
    role: "E Commerce",
    quote:
      "Working with the team transformed our online presence. They delivered a modern, fast, and user-friendly website that perfectly represents our brand and has helped us attract more customers and increase sales.",
    video: video2,
  },
];

const VideoTestimonials = () => {
  return (
    <section
      className="section-padding overflow-hidden bg-slate-50"
      aria-labelledby="video-testimonials-heading">
      <div className="section-container">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Client stories
          </span>
          <h2
            id="video-testimonials-heading"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Real Results, In Their Words
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500">
            Watch how businesses use Binazy-built websites, apps, and software
            systems to move faster online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="group grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl sm:grid-cols-[minmax(13rem,17rem)_1fr]">
              <div className="relative mx-auto aspect-9/16 w-full max-w-72 overflow-hidden bg-slate-950 sm:mx-0 sm:max-w-none">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={`${item.name} video testimonial`}>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                  <PlayCircle className="h-4 w-4 text-brand-600" />
                  Video
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                  {item.role}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {item.quote}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-orange-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

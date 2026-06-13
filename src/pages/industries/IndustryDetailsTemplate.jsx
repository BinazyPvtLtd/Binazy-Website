import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import FAQSection from "@/components/common/FAQSection";
import StatsSection from "@/components/common/StatsSection";
import SEO from "@/components/common/SEO";

const unsplashImage = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const industrySolutionImages = {
  "real estate": [
    unsplashImage("photo-1560518883-ce09059eeffa"),
    unsplashImage("photo-1486406146926-c627a92ad1ab"),
    unsplashImage("photo-1497366811353-6870744d04b2"),
    unsplashImage("photo-1551288049-bebda4e38f71"),
    unsplashImage("photo-1500530855697-b586d89ba3ee"),
    unsplashImage("photo-1450101499163-c8848c66ca85"),
  ],
  education: [
    unsplashImage("photo-1516321318423-f06f85e504b3"),
    unsplashImage("photo-1509062522246-3755977927d7"),
    unsplashImage("photo-1523240795612-9a054b0db644"),
    unsplashImage("photo-1512941937669-90a1b58e7e9c"),
    unsplashImage("photo-1434030216411-0b793f4b4173"),
    unsplashImage("photo-1460925895917-afdab827c52f"),
  ],
  ecommerce: [
    unsplashImage("photo-1556742049-0cfed4f6a45d"),
    unsplashImage("photo-1556742502-ec7c0e9f34b1"),
    unsplashImage("photo-1563013544-824ae1b704d3"),
    unsplashImage("photo-1586528116311-ad8dd3c8310d"),
    unsplashImage("photo-1522202176988-66273c2fd55f"),
    unsplashImage("photo-1460925895917-afdab827c52f"),
  ],
  healthcare: [
    unsplashImage("photo-1576091160550-2173dba999ef"),
    unsplashImage("photo-1519494026892-80bbd2d6fd0d"),
    unsplashImage("photo-1505751172876-fa1923c5c528"),
    unsplashImage("photo-1579154204601-01588f351e67"),
    unsplashImage("photo-1584982751601-97dcc096659c"),
    unsplashImage("photo-1559757148-5c350d0d3c56"),
  ],
  fintech: [
    unsplashImage("photo-1554224155-6726b3ff858f"),
    unsplashImage("photo-1601597111158-2fceff292cdc"),
    unsplashImage("photo-1563013544-824ae1b704d3"),
    unsplashImage("photo-1640340434855-6084b1f4901c"),
    unsplashImage("photo-1526304640581-d334cdbbf45e"),
    unsplashImage("photo-1518546305927-5a555bb7020d"),
  ],
  travel: [
    unsplashImage("photo-1488646953014-85cb44e25828"),
    unsplashImage("photo-1507525428034-b723cf961d3e"),
    unsplashImage("photo-1512427691650-1d38c6447a64"),
    unsplashImage("photo-1436491865332-7a61a109cc05"),
    unsplashImage("photo-1469854523086-cc02fe5d8800"),
    unsplashImage("photo-1500530855697-b586d89ba3ee"),
  ],
  manufacturing: [
    unsplashImage("photo-1581091226825-a6a2a5aee158"),
    unsplashImage("photo-1586528116311-ad8dd3c8310d"),
    unsplashImage("photo-1581092918056-0c4c3acd3789"),
    unsplashImage("photo-1518709268805-4e9042af2176"),
    unsplashImage("photo-1565688534245-05d6b5be184a"),
    unsplashImage("photo-1460925895917-afdab827c52f"),
  ],
};

function getSolutionImage(industryLabel, index) {
  const normalizedLabel = industryLabel.toLowerCase();
  const matchedKey = Object.keys(industrySolutionImages).find((key) =>
    normalizedLabel.includes(key),
  );
  const fallbackImages = industrySolutionImages["real estate"];
  const images = matchedKey
    ? industrySolutionImages[matchedKey]
    : fallbackImages;

  return images[index % images.length];
}

export default function IndustryDetailsTemplate({
  industryId,
  label,
  title,
  titleHighlight,
  subtitle,
  solutionsHeading,
  solutions,
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title={`${title} ${titleHighlight} | Binazy Industry Solutions`}
        description={subtitle}
        path={`/industries/${industryId}`}
      />
      <Navbar />

      <main id="main-content">
        <section className="flex h-87.5 items-center bg-[#0f2070] text-white md:h-112.5 lg:h-150">
          <div className="section-container py-10">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                {title}
                <br />
                <span className="text-blue-300">{titleHighlight}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:mt-6 sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-3xl">
                  {solutionsHeading}
                </h2>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-12 xl:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const solutionImage = getSolutionImage(label, index);

                return (
                  <article
                    key={solution.title}
                    tabIndex={0}
                    className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white">
                    <div className="relative h-44 overflow-hidden sm:h-48">
                      <img
                        src={solutionImage}
                        alt={solution.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover  "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center ${solution.iconBg}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-brand-700 sm:text-xl">
                          {solution.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Herobg1 from "../../../assets/BackGround6.jpg";
import Herobg2 from "../../../assets/BackGround5.jpg";
import Herobg3 from "../../../assets/BackGround2.jpg";

const AUTO_ADVANCE_MS = 5000;
const AUTO_RESET_MS = 5500;
const SWIPE_THRESHOLD = 50;
const CONTENT_SWAP_DELAY_MS = 280;
const TRANSITION_SETTLE_MS = 900;

const slides = [
  {
    headline: "Launch Bold.\nScale Smart.",
    sub: "We help startups turn ideas into fast, scalable web, mobile, and SaaS products with product-focused engineering.",
    accent: "#6EE7B7",
    tag: "Startup-Focused Product Engineering",
    image: Herobg1,
  },
  {
    headline: "Build Products.\nWin Markets.",
    sub: "From MVPs to full-scale platforms, our team ships clean code, intuitive UX, and reliable architecture built for growth.",
    accent: "#93C5FD",
    tag: "MVPs | SaaS | Web and Mobile",
    image: Herobg2,
  },
  {
    headline: "Move Faster.\nDeliver Better.",
    sub: "Partner with a technology team that blends strategy, design, and development to accelerate releases and reduce execution risk.",
    accent: "#FCA5A5",
    tag: "Strategy, Design, and Development",
    image: Herobg3,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [contentVisible, setContentVisible] = useState(true);
  const touchStart = useRef(null);
  const autoRef = useRef(null);
  const currentRef = useRef(0);
  const animatingRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);
  const timeoutsRef = useRef([]);

  const clearPendingTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current = [];
  }, []);

  const stopAutoRotation = useCallback(() => {
    if (autoRef.current !== null) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (index) => {
      if (animatingRef.current || index === currentRef.current) return;

      clearPendingTimeouts();
      animatingRef.current = true;
      setContentVisible(false);
      setPrevIdx(currentRef.current);

      if (prefersReducedMotionRef.current) {
        currentRef.current = index;
        setCurrent(index);
        setContentVisible(true);
        setPrevIdx(null);
        animatingRef.current = false;
        return;
      }

      const swapTimeout = window.setTimeout(() => {
        currentRef.current = index;
        setCurrent(index);
        setContentVisible(true);

        const settleTimeout = window.setTimeout(() => {
          setPrevIdx(null);
          animatingRef.current = false;
        }, TRANSITION_SETTLE_MS);

        timeoutsRef.current.push(settleTimeout);
      }, CONTENT_SWAP_DELAY_MS);

      timeoutsRef.current.push(swapTimeout);
    },
    [clearPendingTimeouts],
  );

  const startAutoRotation = useCallback(
    (delay = AUTO_ADVANCE_MS) => {
      stopAutoRotation();
      if (prefersReducedMotionRef.current) return;

      autoRef.current = window.setInterval(() => {
        goTo((currentRef.current + 1) % slides.length);
      }, delay);
    },
    [goTo, stopAutoRotation],
  );

  const nextSlide = () => goTo((currentRef.current + 1) % slides.length);
  const prevSlide = () =>
    goTo((currentRef.current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = (matches) => {
      prefersReducedMotionRef.current = matches;
      clearPendingTimeouts();

      if (matches) {
        stopAutoRotation();
        setPrevIdx(null);
        setContentVisible(true);
        animatingRef.current = false;
        return;
      }

      startAutoRotation();
    };

    syncMotionPreference(mediaQuery.matches);

    const handleChange = (event) => {
      syncMotionPreference(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      clearPendingTimeouts();
      stopAutoRotation();

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [clearPendingTimeouts, startAutoRotation, stopAutoRotation]);

  const resetAuto = () => {
    startAutoRotation(AUTO_RESET_MS);
  };

  const slide = slides[current];

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      diff > 0 ? nextSlide() : prevSlide();
      resetAuto();
    }

    touchStart.current = null;
  };

  return (
    <>
      <div
        className="hero-root"
        aria-roledescription="carousel"
        aria-label="Featured Binazy highlights"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`bg-layer ${
              i === current
                ? "is-active"
                : i === prevIdx
                  ? "is-leaving"
                  : "is-hidden"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}

        <div
          className="accent-glow"
          aria-hidden="true"
          style={{ background: slide.accent }}
        />

        <section className="hero-stage" aria-label="Hero">
          <div className={`hero-content ${contentVisible ? "visible" : ""}`}>
            <h1 className="hero-headline">{slide.headline}</h1>
            <p className="hero-sub">{slide.sub}</p>

            <div className="cta-row">
              <Link to="/contact-us" className="btn-connect">
                Contact Us
                <svg
                  aria-hidden="true"
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <a className="btn-ghost" href="#solutions-section">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5.5 5l3 2-3 2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Our Services
              </a>
            </div>

            <div className="slide-tag">
              <span className="tag-dot" style={{ background: slide.accent }} />
              {slide.tag}
            </div>
          </div>
        </section>

        <div className="hero-controls">
          <div className="progress-track">
            <div
              aria-hidden="true"
              className="progress-fill"
              key={current}
              style={{ background: slide.accent }}
            />
          </div>

          <div className="dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                style={i === current ? { background: slide.accent } : {}}
                onClick={() => {
                  goTo(i);
                  resetAuto();
                }}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
              />
            ))}
          </div>

          <div className="slide-counter">
            <em>0{current + 1}</em> / 0{slides.length}
          </div>

          <div className="arrow-group">
            <button
              type="button"
              className="arrow-btn"
              onClick={() => {
                prevSlide();
                resetAuto();
              }}
              aria-label="Previous">
              <svg
                aria-hidden="true"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none">
                <path
                  d="M8.5 1L3 6.5l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="arrow-btn"
              onClick={() => {
                nextSlide();
                resetAuto();
              }}
              aria-label="Next">
              <svg
                aria-hidden="true"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none">
                <path
                  d="M4.5 1L10 6.5 4.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

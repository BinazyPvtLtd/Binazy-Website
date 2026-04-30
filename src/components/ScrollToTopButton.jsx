// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.button}>
        ↑
      </button>
    )
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
};

export default ScrollToTopButton;
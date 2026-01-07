import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        cursor-pointer
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gradient-to-r from-blue-600 to-cyan-500
        text-white shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-blue-400
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <ArrowUp className="cursor-pointer w-5 h-5" />
    </button>
  );
};

export default BackToTop;

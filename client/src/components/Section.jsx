import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ id, children, className, setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    rootMargin: "-20% 0px -40% 0px"
  });

  useEffect(() => {
    if (inView && setActiveSection) {
      setActiveSection(id);
    }
  }, [id, inView, setActiveSection]);

  return (
    <section id={id} ref={ref} className={`scroll-mt-24 ${className || ""}`}>
      {children}
    </section>
  );
};

export default Section;

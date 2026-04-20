import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemCards from "./components/ProblemCards";
import HowItWorks from "./components/HowItWorks";
import ReportForm from "./components/ReportForm";
import DashboardPreview from "./components/DashboardPreview";
import Gallery from "./components/Gallery";
import AuthorityResponse from "./components/AuthorityResponse";
import Impact from "./components/Impact";
import FutureScope from "./components/FutureScope";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ToastStack from "./components/ToastStack";
import Section from "./components/Section";

const sections = [
  { id: "home", label: "Home" },
  { id: "problem", label: "Why" },
  { id: "how", label: "How it works" },
  { id: "report", label: "Report" },
  { id: "dashboard", label: "Dashboard" },
  { id: "gallery", label: "Gallery" },
  { id: "authority", label: "Authority" },
  { id: "impact", label: "Impact" },
  { id: "future", label: "Future" }
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");
  const [toasts, setToasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const pushToast = ({ title, description, type = "success" }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <LoadingScreen isLoading={isLoading} />
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="space-y-28 pb-24">
        <Section id="home" setActiveSection={setActiveSection}>
          <Hero />
        </Section>
        <Section id="problem" setActiveSection={setActiveSection}>
          <ProblemCards />
        </Section>
        <Section id="how" setActiveSection={setActiveSection}>
          <HowItWorks />
        </Section>
        <Section id="report" setActiveSection={setActiveSection}>
          <ReportForm onSubmitMock={pushToast} />
        </Section>
        <Section id="dashboard" setActiveSection={setActiveSection}>
          <DashboardPreview />
        </Section>
        <Section id="gallery" setActiveSection={setActiveSection}>
          <Gallery />
        </Section>
        <Section id="authority" setActiveSection={setActiveSection}>
          <AuthorityResponse />
        </Section>
        <Section id="impact" setActiveSection={setActiveSection}>
          <Impact />
        </Section>
        <Section id="future" setActiveSection={setActiveSection}>
          <FutureScope />
        </Section>
      </main>

      <Footer />
      <ToastStack toasts={toasts} />
    </div>
  );
}

export default App;

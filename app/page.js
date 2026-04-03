import BackToTop from "./backToTop";
import HomePage from "./01-main-demo/page";

export const metadata = {
  title: "Swatrixsoft - Premium IT Solutions & Web Development",
  description: "India's leading IT company specializing in web development, mobile apps, AI/ML solutions, cloud architecture, and enterprise software. Transform your business with cutting-edge technology.",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}

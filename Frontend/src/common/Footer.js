// import ContactForm from '../pages/Contact';
import Languages from '../components/languages';
export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Languages />
      <div className="last-item">
        ©{curYear} <a href="/">Kompweb HQ</a>
      </div>
    </footer>
  );
}

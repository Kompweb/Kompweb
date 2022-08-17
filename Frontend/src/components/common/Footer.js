// import ContactForm from '../pages/Contact';
import Languages from './Languages';
export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Languages />
      <div className="last-item">©{curYear} Kompweb HQ</div>
    </footer>
  );
}

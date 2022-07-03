// import '../../styles/Footer.less';
// import ContactForm from '../pages/Contact';
import Languages from './Languages';
export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Languages />
      <div>©{curYear} KOMPWEB HQ</div>
      {/* <br></br>
      <a className="Contact-us" href="/contact">
        Contact
      </a> */}
    </footer>
  );
}

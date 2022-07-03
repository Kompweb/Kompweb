// import '../../styles/Footer.less';
// import ContactForm from '../pages/Contact';
export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>©{curYear} KOMPWEB HQ</div>
      {/* <br></br>
      <a className="Contact-us" href="/contact">
        Contact
      </a> */}
    </footer>
  );
}

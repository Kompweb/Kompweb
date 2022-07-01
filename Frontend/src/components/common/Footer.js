// import '../../styles/Footer.less';

export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright">©{curYear} KOMPWEB HQ</div>

      {/* Subscribe form bellow */}

      {/* <form className="App-form">
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

      <br></br>
      <a className="Contact-us" href="/">
        Contact
      </a>
    </footer>
  );
}

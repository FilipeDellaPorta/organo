import './Rodape.css';

const Rodape = () => {
  return (
    <footer className='rodape'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/images/fb.png' alt=''></img>
            </a>
          </li>
          <li>
            <a href='twitter.com' target='_blank'>
              <img src='/images/tw.png' alt=''></img>
            </a>
          </li>
          <li>
            <a href='instagram.com' target='_blank'>
              <img src='/images/ig.png' alt=''></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src='/images/logo.png'></img>
      </section>
      <section>
        <p>Desenvolvido por Filipe Della Porta</p>
      </section>
    </footer>
  );
};

export default Rodape;

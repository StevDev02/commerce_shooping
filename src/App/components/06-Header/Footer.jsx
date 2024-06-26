import './style/Header_06.css'

export function Footer () {
  return (
    <>
      <footer className='z-20 text-[#000] absolute -translate-x-[0%] -translate-y-[50%] -bottom-[2%] left-[5%] '>
        <div className='col'>
          <img className='logo' src='images/ic_logo.png' alt='' />
          <h4 className='font-black text-lg'>Contactos</h4>
          <p><strong>Dirección: </strong>Galo PI. Lasso y Pedro Carbono, Carapungo</p>
          <p><strong>Telefono: </strong>+593 99 920 3644</p>
          <p><strong>Horario: </strong>08:00 - 13:00, Lunes a Sabados</p>
          <div className='follow'>
            <h4 className='font-black text-lg'>Siguenos</h4>
            {/* <div class='icon'>
              <img src='images/footer/facebook.png' alt='' />
              <img src='images/footer/instagram.png' alt='' />
              <img src='images/footer/tik-tok.png' alt='' />
              <img src='images/footer/twitter.png' alt='' />
              <img src='images/footer/whatsapp.png' alt='' /> */}
            {/* </div> */}
          </div>
        </div>

        <div className='col'>
          <h4 className='font-black text-lg'>Acerca de</h4>
          <a className='links__a relative' href='#'>Sobre nosotros</a>
          <a className='links__a relative' href='#'>Información de entrega</a>
          <a className='links__a relative' href='#'>Politicas y Privacidad</a>
          <a className='links__a relative' href='#'>Terminos y condiciones</a>
          <a className='links__a relative' href='#'>Contactanos</a>
        </div>

        <div className='col fon'>
          <h4 className='font-black text-lg'>Mi cuenta</h4>
          <a className='links__a relative hover:text-[#000]  ' href='#'>Regístrate</a>
          <a className='links__a relative hover:text-[#000]' href='#'>Ver carrito</a>
          <a className='links__a relative hover:text-[#000]' href='#'>Mi lista de deseos</a>
          <a className='links__a relative hover:text-[#000]' href='#'>Seguimiento de mi pedido</a>
          <a className='links__a relative hover:text-[#000]' href='#'>Ayuda</a>
        </div>

        <div className='col install'>
          <h4 className='font-black text-lg'>Descarga nuestra app</h4>
          <p>Desde App Store o Google Play</p>
          <div className='row'>
            {/* <img src='images/footer/google-play.jpg' />
            <img src='images/footer/app-store.jpg' /> */}
          </div>
          <p>Pasarelas de pago seguras</p>
          <img src='images/footer/pagos-methd.png' alt='' />
        </div>
        <div className='copyrigth'>
          <p>© 2024, Sabata etc - HTML CSS Ecommerce Page</p>
        </div>
      </footer>
    </>
  )
}

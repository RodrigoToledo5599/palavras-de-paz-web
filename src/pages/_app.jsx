import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header/index.css';
import '../styles/footer/index.css';
import '../styles/bannerphotos/index.css';
import '../styles/gridphotos/index.css';
import '../styles/depoimentosmain/index.css';
import '../styles/bannervoluntarios/index.css';
import '../styles/doacoes/index.css';
import '../styles/voluntarios/index.css';
import '../styles/bannerdoacoes/index.css';
import '../styles/bannerprograma/index.css';
import '../styles/bannerdevs/index.css';
import '../styles/bannerdownloads/index.css';
import '../styles/downloads/index.css';
import '../styles/desenvolvedores/index.css';
import '../styles/programa/index.css';
import '../styles/globalstyles.css';
import '../styles/swiper/index.css';
import '../styles/fixedBtn/index.css';
import 'animate.css';
import '../styles/contentcadastro/index.css';
import Head from 'next/head';
import React from 'react';
import propTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Palavras de Paz</title>
      </Head>
      <Component { ...pageProps } />
    </>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.shape().isRequired,
};

export default MyApp;

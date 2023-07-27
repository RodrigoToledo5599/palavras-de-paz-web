import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import useGetNotebooks from "../../../hooks/useGetNotebooks";

import styles from "../styles/AreaDeTrabalho.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);

  console.log(notebooks);

  const nome = "Ricardo";
  const reservado = "Reservado";
  const preencher = "Preencher Formulário";
  const download = "Download";

  // TODO: separar header das linhas, para poder dar um notebooks.map pra preencher a tabela.

  return (
    <section className={styles.avaliarCadernos_section}>
      <h1>Avaliar Cadernos</h1>
      <div className={styles.avaliarCadernos_titles}>
        <h2>Aluno</h2>
        <h2>Reservado em</h2>
        <h2>Baixar Caderno</h2>
        <h2>Formulário de avaliação</h2>
      </div>
      <div className={styles.avaliarCadernos_status}>
        <input type="checkbox" />
        <p>{nome}</p>
        <p>{reservado}</p>
        <p>{preencher}</p>
        <div>
          <Image src={DownloadImage} alt="icone de download" />
          <p>{download}</p>
        </div>
      </div>
    </section>
  );
};

export default AvaliarCadernos;

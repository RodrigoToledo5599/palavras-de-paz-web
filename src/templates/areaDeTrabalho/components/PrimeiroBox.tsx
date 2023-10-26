import React from "react";

import useGetEssaysCount from "../../../hooks/useGetEssaysCount";
import useGetNotebooksCount from "../../../hooks/useGetNotebookCount";

import styles from "../styles/AreaDeTrabalho.module.css";

interface IdVol {
  idVol: number;
}

export default function PrimeiroBox({ idVol }: IdVol) {
  const { data: notebooksCount } = useGetNotebooksCount(idVol);
  const { data: essaysCount } = useGetEssaysCount(idVol);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main_container_div}>
        <p className={styles.main_container_p1}>Para marcar presença em um</p>
        <p className={styles.main_container_p2}>Workshop</p>
        <a href="/presenca" target="_blank" rel="noopener noreferrer">
          <button className={styles.main_container_button}>Clique aqui</button>
        </a>
      </div>
      <h3 className={styles.main_container_h3}>
        Relatórios de leitura avaliados: {essaysCount?.count}
      </h3>
      <h3 className={styles.main_container_h3}>
        Cadernos avaliados: {notebooksCount?.count}
      </h3>
    </div>
  );
}

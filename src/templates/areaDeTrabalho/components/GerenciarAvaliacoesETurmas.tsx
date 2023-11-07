import React, { useEffect, useState } from "react";

import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import isReserved from "../../../helpers/isReserved";
import useGetNotebooks from "../../../hooks/useGetNotebooks";
import { INotebooks } from "../types/interfaces";

import "../styles/GerenciarAvaliacoesETurmas.module.css";
import styles from "../styles/AvaliarCadernos.module.css";
import Styles from "../styles/AvaliarRedacoes.module.css";
import stylesDados from "../styles/Dados.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const GerenciarAvaliacoesETurmas = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);
  const [notebooksIn, setNotebooksIn] = useState<INotebooks[]>([]);
  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  useEffect(() => {
    if (notebooks) {
      const updatedNotebooks = notebooks.map((notebook) => ({
        ...notebook,
        reserved: isReserved(notebook.reservationDate),
      }));
      setNotebooksIn(updatedNotebooks);
    }
  }, [notebooks]);

  const putReservationData = async (notebookId: number) => {
    const reserveData = { idvol, notebookId };
    const response = await api.put("/notebooks/reservation", reserveData);
    return response.data;
  };

  const handleReservation = async (notebookId: number) => {
    const updatedNotebooks = notebooksIn.map((notebook) => {
      if (notebook.notebookId === notebookId) {
        return {
          ...notebook,
          reserved: true,
        };
      }
      return notebook;
    });

    setNotebooksIn(updatedNotebooks);

    await putReservationData(notebookId);
  };

  return (
    <section className={styles.avaliar_section}>
      <h1>Gerencie avaliações e turmas aqui</h1>
      <div className={styles.avaliar_itens}>
        <div className="flex ">
          <button className="m-4"> Livros</button>
          <button> cadernos</button>
        </div>
        <div className={styles.avaliar_titles}>
          <span />
          <h2>Nome</h2>
          <h2>Id</h2>
          <h2>Turma</h2>
          <h2>slaaaaaaaaaa</h2>
        </div>
        {notebooksIn &&
          notebooksIn.map(
            ({ notebookId, studentName, studentId, reserved, classId }) => (
              <div key={studentId} className={styles.avaliar_status}>
                {!reserved ? (
                  <>
                    <input
                      type="checkbox"
                      onChange={() => handleReservation(notebookId)}
                    />
                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p>{naoReservado}</p>
                  </>
                ) : (
                  <>
                    <input type="checkbox" checked />
                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p>{studentId}</p>
                    <div className={styles.avaliar_status_div}>
                      <p>{classId}</p>
                    </div>
                  </>
                )}
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default GerenciarAvaliacoesETurmas;

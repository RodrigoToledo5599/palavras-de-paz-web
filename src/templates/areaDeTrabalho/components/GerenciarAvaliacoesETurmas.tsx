import React, { useEffect, useState } from "react";

import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import isReserved from "../../../helpers/isReserved";
import useGetNotebooks from "../../../hooks/useGetNotebooks";
import { INotebooks } from "../types/interfaces";

import "../styles/GerenciarAvaliacoesETurmas.module.css";
import stylesCaderno from "../styles/AvaliarCadernos.module.css";
import Styles from "../styles/AvaliarRedacoes.module.css";
import styles from "../styles/Dados.module.css";

/*
type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);
  const [notebooksIn, setNotebooksIn] = useState<INotebooks[]>([]);
  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

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

  useEffect(() => {
    if (notebooks) {
      const updatedNotebooks = notebooks.map((notebook) => ({
        ...notebook,
        reserved: isReserved(notebook.reservationDate),
      }));
      setNotebooksIn(updatedNotebooks);
    }
  }, [notebooks]);

*/

export default function GerenciarAvaliacoesETurmas() {
  return (
    <section className={Styles.avaliar_section}>
      <h1 className="">Gerencie avalições e turmas aqui</h1>
    </section>
  );
}

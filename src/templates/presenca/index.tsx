import React from 'react';

import HeaderWorkspace from '../../components/headerWorkspace/HeaderWorkspace';

import { INTRO_TEXT, SELECT_QUESTIONS } from './constants';
import Selectable from './Selectable';

import styles from '../cadastro/styles/CadastroTelas.module.css';
import stylesMain from '../cadastro/styles/CadastroTemplate.module.css';

function FormDePresenca() {
  const handleSubmit = (data: any) => console.log(data);

  return (
    <>
      <HeaderWorkspace title="Formulário de Presença" />
      <div className={ stylesMain.main_container_form }>
        <form className={ styles.cadastroFormSection } onSubmit={ handleSubmit }>
          <p className={ styles.formParagraph }>{INTRO_TEXT}</p>
          {SELECT_QUESTIONS.map(({ fieldName, question, options }) => (
            <Selectable
              key={ fieldName }
              fieldName={ fieldName }
              question={ question }
              options={ options.map((option) => ({
                label: option,
                value: option,
              })) }
            />
          ))}
        </form>
      </div>
    </>
  );
}

export default FormDePresenca;
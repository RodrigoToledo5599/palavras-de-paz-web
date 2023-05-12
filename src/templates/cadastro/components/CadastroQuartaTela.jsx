import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';
import { DATA_1, DATA_2 } from './constants';
import { cadastroTela4Schema } from './schemas';
import ErrorMessage from '../../../components/forms/ErrorMessage';
import EmptyOption from '../../../components/forms/EmptyOption';

export default function cadastroQuartaTela({
  buttonCallback,
  returnButton,
  data,
} = props) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela4Schema),
  });

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(buttonCallback) }
    >
      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          Atualmente, essas são as nossas oportunidades de voluntariado. De
          quais você gostaria de participar?
        </p>

        {DATA_1.map(({ label, value }) => (
          <div key={ value } className={ styles.cadastroFormDivCheckbox }>
            <input
              className={ styles.cadastroFormInputCheckbox }
              type="checkbox"
              id={ value }
              checked={ data.oportunidades?.[value] }
              { ...register(`oportunidades.${ value }`) }
            />
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor={ value }
            >
              {label}
            </label>
          </div>
        ))}
      </div>

      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          A nossa organização é formada totalmente por voluntários. Caso surjam
          outras oporturnidades você gostaria de ajudar em alguma dessas áreas ?
        </p>
        {DATA_2.map(({ label, value }) => (
          <div key={ value } className={ styles.cadastroFormDivCheckbox }>
            <input
              className={ styles.cadastroFormInputCheckbox }
              type="checkbox"
              id={ value }
              checked={ data.habilidades?.[value] }
              { ...register(`habilidades.${ value }`) }
            />
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor={ value }
            >
              {label}
            </label>
          </div>
        ))}
      </div>

      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          Você precisa de declaração de horas de atividades voluntárias para a
          faculdade ou trabalho?
        </p>
        <select
          defaultValue={ data.declaracao || '' }
          className={ styles.cadastroFormSectionInputText }
          { ...register('declaracao') }
        >
          <EmptyOption />
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
        <ErrorMessage showError={ errors.declaracao } style={ styles.inputError } />
      </div>
      <div className={ styles.buttonsRow }>
        <button
          type="button"
          className={ styleButton.cadastroFormSectionButton }
          onClick={ () => returnButton(getValues()) }
        >
          Anterior
        </button>
        <button type="submit" className={ styleButton.cadastroFormSectionButton }>
          Finalizar
        </button>
      </div>
    </form>
  );
}

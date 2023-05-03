import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AWARENESS, OPEN_TEXT_FIELDS, REFERRAL } from './constants';

import styles from '../styles/CadastroTelas.module.css';

import { cadastroTela3Schema } from './schemas';

export default function cadastroTerceiraTela() {
  const [about, experience, expectations] = OPEN_TEXT_FIELDS;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela3Schema),
  });

  const dispatch = useDispatch();

  watch('referral');
  watch('awareness');
  watch('aboutYou');
  watch('experience');
  watch('expectations');

  const onSubmit = (data) => {
    console.log(data);
    dispatch(increment());
    reset();
  };

  const adjustTextAreaSize = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${ e.target.scrollHeight }px`;
  };

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(onSubmit) }
    >
      <section>
        <div className={ styles.cadastroFormDiv }>
          <label className={ styles.formParagraph } htmlFor={ REFERRAL.fieldLabel }>
            {REFERRAL.fieldLabel}
          </label>
          <select
            defaultValue=""
            className={ styles.cadastroFormSectionInputText }
            { ...register('referral') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            {REFERRAL.options.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.formParagraph }
            htmlFor={ AWARENESS.fieldLabel }
          >
            {AWARENESS.fieldLabel}
          </label>
          <select
            defaultValue=""
            className={ styles.cadastroFormSectionInputText }
            { ...register('awareness') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            {AWARENESS.options.map(({ label, value }) => (
              <option key={ value } value={ value }>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label className={ styles.formParagraph } htmlFor={ about.label }>
            {about.text}
          </label>
          <textarea
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('aboutYou') }
          />
          {errors.aboutYou && (
            <p className={ styles.inputError }>{errors.aboutYou.message}</p>
          )}
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label className={ styles.formParagraph } htmlFor={ experience.label }>
            {experience.text}
          </label>
          <textarea
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('experience') }
          />
          {errors.experience && (
            <p className={ styles.inputError }>{errors.experience.message}</p>
          )}
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label className={ styles.formParagraph } htmlFor={ expectations.label }>
            {expectations.text}
          </label>
          <textarea
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('expectations') }
          />
          {errors.expectations && (
            <p className={ styles.inputError }>{errors.expectations.message}</p>
          )}
        </div>
      </section>
    </form>
  );
}

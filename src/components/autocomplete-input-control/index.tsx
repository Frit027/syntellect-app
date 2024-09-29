import React from 'react';
import { observer } from 'mobx-react-lite';
import { generateID } from '../../utilities';
import { classes as commonClasses, LoadingStatus } from '../../common/constants';
import { TProps } from './interfaces';
import { classes } from './constants';
import './index.css';

/**
 * Текстовый контрол, который позволяет выводить подсказки при наборе текста
 *
 * @component
 */
export const AutocompleteInputControl = observer(({ viewModel, maxTips }: TProps) => {
  /**
   * Обработка ввода текста в инпут
   * @param {React.ChangeEvent<HTMLInputElement>} e - Событие ввода текста в инпут
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => viewModel.setValue(e.target.value);

  /**
   * Обработка клика по одной из подсказок в выпадающем списке
   * @param {string} countryName - Название станы, по которой кликнули
   */
  const handleClick = (countryName: string) => viewModel.setValue(countryName);

  return <div className={classes.component}>
    <input className={commonClasses.input} value={viewModel.value} onChange={handleChange} type='text' />
    {viewModel.state === LoadingStatus.Loading
      ? <div className={`${classes.list} ${classes.listMinHeight}`}>
          <span className={classes.loader} />
        </div>
      : null}
    {viewModel.countries.length
      ? <div className={classes.list}>
          {viewModel.countries.slice(0, maxTips).map((country) => (
            <div key={generateID()} className={classes.item} onClick={() => handleClick(country.name)}>
              <span className={classes.text}>{country.name}, {country.fullName}</span>
              <img className={classes.flag} src={country.flag} alt='Flag' />
            </div>
          ))}
      </div>
      : null}
  </div>;
});

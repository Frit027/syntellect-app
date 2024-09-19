import React from 'react';
import { observer } from 'mobx-react-lite';
import { generateID } from '../../utilities';
import { classes } from './constants';
import { TProps } from './interfaces';
import './index.css';

export const AutocompleteInputControl = observer(({ viewModel, maxTips }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => viewModel.setValue(e.target.value);

  const handleClick = (countryName: string) => viewModel.setValue(countryName);

  return <div>
    <input className={classes.input} value={viewModel.value} onChange={handleChange} type='text' />
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

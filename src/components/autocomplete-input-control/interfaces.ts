import { AutocompleteInputViewModel } from '../../stores';

/**
 * Тип пропсов контрола-автокомплита
 */
export type TProps = {
  viewModel: AutocompleteInputViewModel,

  // максимальное количество подсказок
  maxTips: number,
};

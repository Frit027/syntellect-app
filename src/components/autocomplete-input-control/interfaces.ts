import { AutocompleteInputViewModel } from '../../stores';

/**
 * Тип пропсов контрола-автокомплита
 */
export type TProps = {
  // ViewModel для обновления и получения данных
  viewModel: AutocompleteInputViewModel,

  // максимальное количество подсказок
  maxTips: number,
};

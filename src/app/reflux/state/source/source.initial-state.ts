import { ISourceRedux } from './source.interface';

export function sourceState(): ISourceRedux {
  return {
    byId: { },
    allIds: []
  };
};
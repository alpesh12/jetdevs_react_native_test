import * as React from 'react';

interface IHeightContext {
  height: number;
  changeHeight: (height: number) => void;
}
export const HeightContext = React.createContext<IHeightContext>(
  {} as IHeightContext
);

export const heightContext = () => React.useContext(HeightContext);

import { bindActionCreators } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../rdx';

export function useAppDispatch(actions?: any) {
  const dispatch = useDispatch<AppDispatch>();
  return Array.isArray(actions)
    ? actions.map((a) => bindActionCreators(a, dispatch))
    : bindActionCreators(actions, dispatch);
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {
  auth,
  todo,
  TodoActions,
  TodoState,
  AuthActions,
  AuthState,
} from '../../stores';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';

type Props = {
  children: ReactNode | ReactNode[];
};

type RootState = {auth: AuthState; todo: TodoState};
type RootAction = TodoActions | AuthActions;

const reducers = combineReducers<RootState>({
  auth,
  todo,
});

const store = createStore(reducers, {});

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useRootDispatch: () => Dispatch<RootAction> = useDispatch;

export const Redux = ({children}: Props) => (
  <Provider store={store}>{children}</Provider>
);

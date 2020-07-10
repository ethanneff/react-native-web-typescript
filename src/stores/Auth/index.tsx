export type AuthState = {
  token: string | undefined;
};

export type AuthActions =
  | {
      type: 'LOGIN';
    }
  | {
      type: 'LOGOUT';
    };

export function auth(
  state: AuthState = {token: undefined},
  action: AuthActions,
): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {...state, token: 'yes'};
    case 'LOGOUT':
      return {...state, token: undefined};
    default:
      return state;
  }
}

export type TodoState = {
  text: string;
  completed: boolean;
}[];

export type TodoActions =
  | {
      type: 'ADD_TODO';
      text: string;
    }
  | {
      type: 'TOGGLE_TODO';
      index: number;
    };

export function todo(state: TodoState = [], action: TodoActions): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((item, index) =>
        index === action.index ? {...item, completed: !item.completed} : item,
      );
    default:
      return state;
  }
}

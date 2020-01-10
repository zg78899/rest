import { useReducer, useCallback } from 'react';
//커스텀훅의 초기상태
const initalState = {
  past: [],
  present: null,
  future: []
}

const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case 'UNDO':
      const previous = past[past.length - 1];
      const newPast = past.slice(0,past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, future]
      }
    case 'REDO':
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    case 'SET':
      const { newPresent } = action;
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []

      }
    case 'CLEAR':
      const { initalPresent } = action;

      return {
        ...initalState,
        present: initalPresent
      }
  }
}
//useUndo의 초기값을 현재 값으로 파라미터로 받기 위해서
export function useUndo(initalPresent) {
  const [state, dispatch] = useReducer(reducer, {
    ...initalState,
    present: initalPresent
  });

  const undo = useCallback(() => {
    const canUndo = state.past.length !== 0;
    const canRedo = state.future.length !== 0;


    const undo = useCallback(() => {
      if (canUndo) {
        dispatch({ type: 'Undo' })
      }
    }, [canUndo, dispatch]);

    const redo = useCallback(() => {
      if (canRedo) {
        dispatch({ type: 'Redo' })
      }
    }, [canRedo, dispatch])

    const set = useCallback((newPresent) => {
      dispatch({ type: 'SET', newPresent })

    }, [dispatch])

    const clear = useCallback(() => {
      dispatch({ type: 'CLEAR', initalPresent })
    }, [dispatch])

    return { state: state.prsent, set, undo, redo, clear, canUndo, canRedo }
  }
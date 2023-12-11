import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  isEditMode: boolean;
  currentTodo: Todo | null;
  newTaskType: TypedColumn;
  openModal: (isEdit?: boolean, todo?: Todo | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  isEditMode: false,
  currentTodo: null,
  newTaskType: 'todo',
  openModal: (isEdit = false, todo = null, taskType: TypedColumn = 'todo') => {
    set({ isOpen: true, isEditMode: isEdit, currentTodo: todo, newTaskType: taskType });
  },
  closeModal: () => set({ isOpen: false, isEditMode: false, currentTodo: null, newTaskType: 'todo' }),
}));

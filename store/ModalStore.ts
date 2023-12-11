import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  isEditMode: boolean;
  currentTodo: Todo | null;
  openModal: (isEdit?: boolean, todo?: Todo | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  isEditMode: false,
  currentTodo: null,
  openModal: (isEdit = false, todo = null) => {
    set({ isOpen: true, isEditMode: isEdit, currentTodo: todo });
  },  closeModal: () => set({ isOpen: false, isEditMode: false, currentTodo: null }),
}));

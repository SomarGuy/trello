"use client"
import React, { useState, useRef, useEffect } from "react";
import { FormEvent, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import { useBoardStore } from "@/store/BoardStore";
import { zonedTimeToUtc } from "date-fns-tz";

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const { isOpen, isEditMode, currentTodo, closeModal } = useModalStore(state => state);
  const { addTask, updateEditedTodo, setImage: setGlobalImage } = useBoardStore(state => state);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    if (isEditMode && currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description || "");
      setDueDate(currentTodo.dueDate || "");
    } else {
      setTitle("");
      setDescription("");
      setDueDate("");
      setSelectedImage(null);
    }
  }, [isEditMode, currentTodo]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedDueDate = dueDate ? zonedTimeToUtc(dueDate, "America/New_York").toISOString() : "";
    
    if (isEditMode && currentTodo) {
      await updateEditedTodo(
        currentTodo.$id,
        title,
        description,
        updatedDueDate,
        currentTodo.status
      );
    } else {
      await addTask(title, description, updatedDueDate, "todo", selectedImage);
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setSelectedImage(null);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        onSubmit={handleSubmit}
        className="relative z-10"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {isEditMode ? "Edit Task" : "Add a Task"}
                </Dialog.Title>
                <div className="mt-2">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a task title..."
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="mt-2">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task description..."
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <TaskTypeRadioGroup />
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => imagePickerRef.current?.click()}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    Upload Image
                  </button>
                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      if (file && file.type.startsWith("image/")) {
                        setSelectedImage(file);
                      }
                    }}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    {isEditMode ? "Save Changes" : "Add Task"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
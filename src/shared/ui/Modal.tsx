import React, { ReactNode } from "react";
import { Transition } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      )}

      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative z-20">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

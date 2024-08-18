import React, { FC, SyntheticEvent, useEffect, useRef } from "react";
import "./styles/ModernModal.css";
import Draggable from "react-draggable";

export interface ModernModalProps {
  isOpen: boolean;
  onClose: (
    event: SyntheticEvent<HTMLDialogElement, Event> | undefined
  ) => void;
  children?: React.ReactNode;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "fullscreen";
  isDraggable?: boolean;
}

export const ModernModal: FC<ModernModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
  isDraggable,
}) => {
  const modernModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // prettier-ignore
      if (modernModalRef.current && !modernModalRef.current.contains(event.target as Node)
      ) {
          onClose(undefined);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    isOpen && (
      <Draggable
        disabled={!isDraggable || size == "fullscreen"}
        handle=".modern-modal-header"
      >
        <dialog
          ref={modernModalRef}
          className={`modern-modal modern-modal-${size}`}
          open={isOpen}
          onClose={onClose}
        >
          <div>
            <div
              className={`modern-modal-header ${
                isDraggable && size != "fullscreen" && "cursor-move"
              }`}
            >
              {/* ModalHeader */}
              <button
                className="modern-modal-close-btn"
                onClick={() => onClose(undefined)}
              >
                X
              </button>
            </div>
            <div
              className={`${
                size == "fullscreen"
                  ? "modern-modal-content-fullscreen"
                  : "modern-modal-content"
              }`}
            >
              {/* ModalContent */}
              {children}
            </div>
          </div>
        </dialog>
      </Draggable>
    )
  );
};

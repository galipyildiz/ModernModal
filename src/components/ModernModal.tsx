import React, {
  CSSProperties,
  FC,
  SyntheticEvent,
  useEffect,
  useRef,
} from "react";
import "./styles/ModernModal.css";

export interface ModernModalProps {
  isOpen: boolean;
  onClose: (
    event: SyntheticEvent<HTMLDialogElement, Event> | undefined
  ) => void;
  children?: React.ReactNode;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "fullscreen";
}

export const ModernModal: FC<ModernModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
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

  const getDialogStyles = (): CSSProperties => {
    const baseDecreaseValue = 128;
    const baseStyles: CSSProperties = {
      border: "2px solid red",
      boxSizing: "border-box",
      overflowY: "auto",
      maxHeight: `calc(100vh - ${baseDecreaseValue}px)`,
      minWidth: "300px",
    };
    switch (size) {
      case "fullscreen":
        return {
          ...baseStyles,
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          maxHeight: "100vh",
        };
      case "xlarge":
        return {
          ...baseStyles,
          width: `calc(100vw - ${baseDecreaseValue * 2}px)`,
        };
      case "large":
        return {
          ...baseStyles,
          width: `calc(100vw - ${baseDecreaseValue * 4}px)`,
        };
      case "medium":
        return {
          ...baseStyles,
          width: `calc(100vw - ${baseDecreaseValue * 6}px)`,
        };
      case "small":
        return {
          ...baseStyles,
          width: `calc(100vw - ${baseDecreaseValue * 8}px)`,
        };
      case "xsmall":
        return {
          ...baseStyles,
          width: `calc(100vw - ${baseDecreaseValue * 10}px)`,
        };
      default:
        return { ...baseStyles };
    }
  };

  return (
    isOpen && (
      <dialog
        ref={modernModalRef}
        className="modern-modal"
        style={getDialogStyles()}
        open={isOpen}
        onClose={onClose}
      >
        <div>
          <div className="modern-modal-header">
            {/* ModalHeader */}
            <button
              className="modern-modal-close-btn"
              onClick={() => onClose(undefined)}
            >
              X
            </button>
          </div>
          <div className="modern-modal-content">
            {/* ModalContent */}
            {children}
          </div>
        </div>
      </dialog>
    )
  );
};

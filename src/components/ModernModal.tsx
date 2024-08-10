import React, {
  CSSProperties,
  FC,
  SyntheticEvent,
  useEffect,
  useRef,
} from "react";
export interface ModernModalProps {
  isOpen: boolean;
  onClose: (
    event: SyntheticEvent<HTMLDialogElement, Event> | undefined
  ) => void;
  children: React.ReactNode;
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
    const baseStyles: CSSProperties = {
      border: "2px solid red",
      boxSizing: "border-box",
      overflowY: "auto",
      maxHeight: "calc(100vh - 20px)",
    };
    switch (size) {
      case "fullscreen":
        return {
          ...baseStyles,
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
        };
      case "xlarge":
        return {
          ...baseStyles,
          width: "calc(100vw - 128px)",
          maxHeight: "calc(100vh - 128px)",
        };
      default:
        return { ...baseStyles };
    }
  };

  return (
    isOpen && (
      <dialog
        ref={modernModalRef}
        style={getDialogStyles()}
        open={isOpen}
        onClose={onClose}
      >
        <div>
          <button onClick={() => onClose(undefined)}>Close</button>
          {children}
        </div>
      </dialog>
    )
  );
};

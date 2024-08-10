import React, { FC, SyntheticEvent } from "react";
export interface ModernModalProps {
  isOpen: boolean;
  onClose: (
    event: SyntheticEvent<HTMLDialogElement, Event> | undefined
  ) => void;
  children: React.ReactNode;
}
export const ModernModal: FC<ModernModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <dialog open={isOpen} onClose={onClose}>
      <div>
        <button onClick={() => onClose(undefined)}>Close</button>
        {children}
      </div>
    </dialog>
  );
};

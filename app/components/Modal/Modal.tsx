"use client";

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 600px;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  display: flex;
  gap: 190px;
  height: 30px;
  font-weight: 600;
`;

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body: React.ReactElement;
  footer: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalWrapper>
        <Header>
          <AiOutlineClose
            onClick={handleClose}
            style={{ position: "relative", left: "10px" }}
          />
          {title}
        </Header>
        {body}
        {footer}
        {secondaryAction && secondaryLabel && (
          <Button
            disabled={disabled}
            label={secondaryLabel}
            onClick={handleSubmit}
          />
        )}
        <Button
          disabled={disabled}
          label={actionLabel}
          onClick={handleSubmit}
        />
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;

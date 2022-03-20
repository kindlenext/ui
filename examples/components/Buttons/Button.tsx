/**
 * Copyright (c) 2022-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary component for the Button
 */
export const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  label,
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

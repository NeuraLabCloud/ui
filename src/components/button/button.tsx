import styles from "./button.scss?inline";
import { ButtonHTMLAttributes, component$, useStyles$ } from "@builder.io/qwik";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  btnVariant?: "primary" | "secondary" | "primary-pulse";
}

export const Button = component$<ButtonProps>(
  ({ btnText, btnVariant, ...props }) => {
    useStyles$(styles);

    if (!btnVariant) {
      return (
        <button class="btn-primary" {...props}>
          {btnText}
        </button>
      );
    }

    if (btnVariant === "primary-pulse") {
      return (
        <button class="btn-primary-pulse" {...props}>
          {btnText}
        </button>
      );
    }

    return (
      <button
        class={btnVariant === "primary" ? "btn-primary" : "btn-secondary"}
        {...props}
      >
        {btnText}
      </button>
    );
  },
);

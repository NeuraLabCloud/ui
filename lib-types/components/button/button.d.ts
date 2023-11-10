import { ButtonHTMLAttributes } from "@builder.io/qwik";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnText: string;
    btnVariant?: "primary" | "secondary" | "primary-pulse";
}
export declare const Button: import("@builder.io/qwik").Component<ButtonProps>;
export {};

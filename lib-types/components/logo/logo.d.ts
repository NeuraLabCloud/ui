import { AnchorHTMLAttributes } from '@builder.io/qwik';
interface LogoProps {
    w?: number;
    h?: number;
    alt?: string;
    src?: string;
    url?: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}
export declare const NeuralabLogo: import("@builder.io/qwik").Component<LogoProps>;
export {};

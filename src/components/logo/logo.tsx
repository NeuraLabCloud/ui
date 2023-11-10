import { AnchorHTMLAttributes, component$ } from '@builder.io/qwik';

interface LogoProps {
	w?: number;
	h?: number;
	alt?: string;
	src?: string;
	url?: string;
	target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}

const defaultUrl = 'https://neuralab.dev';
const defaultSrc =
	'https://raw.githubusercontent.com/NeuraLabCloud/static-assets/main/branding/icons/processor/processor.svg';

export const NeuralabLogo = component$<LogoProps>(
	({ w, h, alt, url, target, src }) => {
		return (
			<a
				href={url ?? defaultUrl}
				target={target}>
				<img
					src={src ?? defaultSrc}
					alt={alt}
					width={w ?? 50}
					height={h ?? 50}
				/>
			</a>
		);
	}
);

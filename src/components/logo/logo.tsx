import { component$ } from "@builder.io/qwik";

interface LogoProps {
  w?: number;
  h?: number;
  alt?: string;
}

const url =
	'https://raw.githubusercontent.com/NeuraLabCloud/static-assets/main/branding/icons/processor/processor.svg';

export const NeuralabLogo = component$<LogoProps>(({ w, h, alt }) => {
  return (
			<div>
				<a href='https://neuralab.dev'>
					<img
						src={url}
						alt={alt}
						width={w}
						height={h}
					/>
				</a>
			</div>
		);
});

import { component$ } from "@builder.io/qwik";
import { Avatar } from "../avatar/avatar";

interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

export const NeuralabLogo = component$<LogoProps>(({ width, height, alt }) => {
  return (
			<div>
				<a href='https://neuralab.dev'>
				<Avatar src='https://raw.githubusercontent.com/NeuraLabCloud/static-assets/main/branding/icons/processor/processor.svg' width={width} height={height} alt={alt}/>
				</a>
			</div>
		);
});

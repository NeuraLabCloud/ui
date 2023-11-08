import styles from './avatar.scss?inline';
import { component$, useStyles$ } from '@builder.io/qwik';

interface AvatarProps {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	animation?: 'hover' | 'none';
}

export const Avatar = component$<AvatarProps>(
	({ src, alt, width, height, animation = 'none' }) => {
		useStyles$(styles);

		if (animation === 'none') {
			return (
				<img
					class='avatar'
					src={src}
					alt={alt}
					width={width ?? 150}
					height={height ?? 150}
				/>
			);
		}

		return (
			<img
				class='avatar-animate'
				src={src}
				alt={alt}
				width={width ?? 150}
				height={height ?? 150}
			/>
		);
	}
);

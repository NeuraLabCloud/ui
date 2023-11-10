import { Avatar } from './components/avatar/avatar';
import { Button } from './components/button/button';
import { Center } from './components/center/center';
import { NeuralabLogo } from './components/logo/logo';
import { TextInput } from './components/text-input/text-input';
import { Title } from './components/title/title';

export default () => {
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<title>Neuralab UI Library</title>
			</head>
			<body
				style={{
					backgroundColor: '#125453',
				}}>
				<Center>
					<NeuralabLogo
						w={50}
						h={50}
					/>
				</Center>
				<Center>
					<Title animation='underline'>Neural lab UI Library</Title>
				</Center>

				<Center>
					<Button
						style={{
							marginTop: '20px',
						}}
						btnVariant="primary-pulse"
						btnText='view my source code'
						onClick$={() =>
							(window.location.href = 'https://github.com/NeuraLabCloud/ui')
						}
					/>
				</Center>
				<Avatar src='https://cdn.discordapp.com/avatars/270904126974590976/5131053ad6d3e35ef587c8fc3d471963.png' w={10} h={90} />
				<TextInput placeholder='qwik.js > react.js ???'/>
			</body>
		</>
	);
};

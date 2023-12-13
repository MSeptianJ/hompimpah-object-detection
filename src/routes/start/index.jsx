import { useAtom, useSetAtom } from 'jotai';
import { Link } from 'react-router-dom';
import TEXTLOGO from '../../assets/img/Text Logo.svg';
import LOGO from '../../assets/img/logo.svg';
import BtnPrimary from '../../components/btnComponents/BtnPrimary';
import {
	gamePlayedStateAtom,
	plsAddGameStateAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignIn } from '../../libs/firebase/FirebaseAuth';
import { AngleRightIcon } from '../../libs/icons';
import BtnList from './components/BtnList';

const Start = () => {
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setPlsAddGameState = useSetAtom(plsAddGameStateAtom);
	const [gamePlayedState] = useAtom(gamePlayedStateAtom);

	const textMenus = [
		{
			url: '/single',
			text: 'Rock Paper Scissors',
			func: async () => {
				if (!userUID) {
					const currentUID = await AuthSignIn();
					setUserUID(currentUID);

					setPlsAddGameState(true);
				}
			},
		},
		{
			url: '/tutorial',
			text: 'Tutorial',
		},
		{
			url: '/about',
			text: 'About',
		},
	];

	return (
		<div className="m-auto flex min-h-screen w-full flex-col justify-center text-center">
			<div className=" flex w-full items-center justify-center p-4">
				<div className=" h-20 max-h-24 w-20">
					<img src={LOGO} alt="App Logo" className="h-full w-full" />
				</div>
				<div className="">
					<img src={TEXTLOGO} alt="App Text Logo" className="h-full" />
				</div>
			</div>

			<div className=" w-full p-4">
				<div className=" m-auto w-3/4">
					<ul className=" w-full">
						{textMenus.map((textMenu, i) => (
							<BtnList
								key={i}
								url={textMenu.url}
								text={textMenu.text}
								func={textMenu.func}
							/>
						))}

						<div
							className={`group relative w-full rounded-md shadow-lg transition-colors duration-300 ${
								gamePlayedState
									? 'bg-primaryColor text-backColor hover:bg-accentColor '
									: 'bg-backColor'
							} `}
						>
							<Link to="/survey">
								<BtnPrimary
									btnText="App Survey"
									btnDisabled={gamePlayedState ? false : true}
									btnStyles=" w-full p-4 flex items-center"
									btnIcon={
										<AngleRightIcon
											className={`mr-4 h-6 w-6 ${
												gamePlayedState
													? 'text-accentColor group-hover:text-primaryColor'
													: 'text-primaryColor group-hover:text-accentColor'
											} `}
										/>
									}
								/>
							</Link>
							{gamePlayedState && (
								<span className="absolute -right-2 -top-2 flex aspect-square w-5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentColor opacity-75 transition-colors duration-300 group-hover:bg-primaryColor"></span>
									<span className="relative m-auto inline-flex aspect-square w-4 rounded-full bg-orange-400 transition-colors duration-300 group-hover:bg-primaryColor"></span>
								</span>
							)}
						</div>
						<div></div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Start;

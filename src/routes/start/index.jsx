import { useAtom, useSetAtom } from 'jotai';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../components/smallComponents/BtnPrimary';
import {
	gamePlayedStateAtom,
	plsAddGameStateAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignIn } from '../../libs/firebase/FirebaseAuth';
import BtnList from './components/BtnList';

const Start = () => {
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setPlsAddGameState = useSetAtom(plsAddGameStateAtom);
	const [gamePlayedState] = useAtom(gamePlayedStateAtom);

	const textMenus = [
		{
			url: '/single',
			text: 'Rock Paper Scissors (Single)',
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
			<div className=" w-full p-4 text-center text-red-400">
				<h1 className=" text-4xl font-bold uppercase">HOMPIMPAH</h1>
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
						<Link to="/survey">
							<BtnPrimary
								btnText="App Survey"
								btnStyles={
									gamePlayedState
										? 'bg-slate-300 text-slate-600 cursor-pointer hover:bg-slate-500'
										: 'bg-slate-600 text-slate-300 cursor-pointer hover:bg-slate-500'
								}
								btnDisabled={gamePlayedState ? false : true}
							/>
						</Link>
						<div className=" cursor-pointer"></div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Start;

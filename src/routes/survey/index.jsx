import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';

const Survey = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="App Survey" />

			<div className=" row-span-4 mx-auto grid h-full w-3/4 grid-rows-2 items-center rounded-sm bg-slate-300 p-6">
				<section className="w-full text-sm font-semibold">
					<p>
						Terima kasih sudah memainkan permainan, dan sekali lagi saya meminta
						sedikit waktu anda untuk mengisi survey berikut
					</p>
				</section>

				<div className=" mt-5 w-full">
					<a
						className=" m-auto w-full rounded-sm bg-slate-400 px-4 py-2 font-semibold uppercase"
						href="https://forms.gle/qwubutqV8S4oj6MR8"
						target="blank"
					>
						Survey Link
					</a>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Survey;

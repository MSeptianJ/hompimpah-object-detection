import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';

const Survey = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="App Survey" />

			<div className=" row-span-4 mx-auto grid h-full w-3/4 grid-rows-5 items-start rounded-sm bg-slate-300 p-6">
				<section className="row-span-4 w-full items-start text-left font-semibold">
					<p className=" mb-2">
						Terima kasih sudah memainkan aplikasi ini. Jika boleh, saya meminta
						sedikit waktu anda untuk mengisi survey dengan menekan link dibawah.
					</p>
					<p>
						Survey ini bertujuan untuk menguji kegunaan dari aplikasi permain
						hompimpah ini. Semua data yang dikumpulkan akan dirahasiakan dan
						digunakan untuk pengembangan aplikasi kedepannya.
					</p>
				</section>

				<div className=" w-full">
					<a
						className=" m-auto w-full rounded-sm bg-slate-400 px-4 py-2 font-semibold	 uppercase"
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

import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';

const About = () => {
	return (
		<div className="m-auto flex min-h-screen w-full flex-col text-center">
			<TitlePage titleText="About" />

			<div className=" mx-auto w-full">
				<div className=" m-auto flex w-3/4 flex-col gap-4 rounded-md bg-slate-300 p-5">
					<section className=" w-full text-sm">
						<h4 className=" mb-3 w-full text-left text-xl font-bold">
							The Goal
						</h4>
						<p className=" mb-3 px-3 text-left">
							Tujuan utama dari Game Hompimpah adalah melestarikan permainan
							permainan kecil untuk melakukan proses penentuan siapa dulu yang
							bermain atau yang disebut Hompimpah. Oleh karena itu, game
							Hompimpah adalah kumpulan permainan kecil seperti Kertas Gunting
							Batu.
						</p>
						<p className=" px-3 text-left">
							Untuk membantu hal tersebut, diterapkan teknologi baru seperti
							object detection agar menarik perhatian pengguna. Object detection
							ini dikembangkan menggunakan machine learning sehingga dapat
							dikembangkan lagi agar dapat mendeteksi hal lain juga.
						</p>
					</section>

					<section className=" w-full text-sm">
						<h4 className=" mb-3 w-full text-left text-xl font-bold">
							Development
						</h4>
						<p className=" mb-3 px-3 text-left">
							Pengembangan permainan ini dilakukan oleh @mseptianj.
						</p>
					</section>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default About;

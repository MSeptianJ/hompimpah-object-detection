import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import Ilust from '../../assets/img/KGB.svg';

const Tutorial = () => {
	return (
		<div className="m-auto flex w-full flex-col justify-center text-center">
			<TitlePage titleText="Tutorial" />

			<div className=" mx-auto w-full">
				<div className=" m-auto flex w-3/4 flex-col gap-4 rounded-md bg-slate-300 p-5">
					<section className=" w-full text-sm">
						<h4 className=" mb-3 w-full text-left text-xl font-bold">
							Description
						</h4>
						<p className=" mb-3 px-3 text-left">
							Game Hompimpah ini menggunakan permainan Kertas Gunting Batu untuk
							menentukan pemenang. Seperti umumnya, permainan Kertas Gunting
							Batu menggunakan tiga bentuk tangan, seperti pada gambar berikut
						</p>
						<div className=" w-full rounded-md ">
							<img
								className=" mx-auto rounded-sm bg-slate-600 object-contain px-5 py-4"
								src={Ilust}
								alt="Ilustrasi Kertas Gunting Batu"
							/>
						</div>
					</section>

					<section className=" w-full text-sm">
						<h4 className=" mb-3 w-full text-left text-xl font-bold">
							How to Play
						</h4>
						<ul className=" w-full list-disc px-5 text-left">
							<li>
								Untuk memainkan permainan ini, anda sebagai pemain akan
								menggunakan kamera perangkat anda, untuk menampilkan bentuk
								tangan yang anda pilih.
							</li>
							<li>
								Sebelum memulai deteksi, pilih tempat yang memiliki cahaya yang
								terang sehingga gambar yang ditampilkan web cam terlihat dengan
								jelas.
							</li>
							<li>
								Anda bisa bermain dengan camera depan (selfie) atau dengan
								kamera belakang smartphone anda.
							</li>
							<li>
								Tekan tombol deteksi dan letakan tangan anda di depan kamera
								dengan bentuk tangan yang anda pilih, diam kan selama proses
								deteksi berlangsung
							</li>
						</ul>
						<p className=" mb-3 text-left"></p>
					</section>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Tutorial;

import { useSetAtom } from 'jotai';
import { tutorModalAtom } from '../../libs/atoms';
import { GoBackIcon } from '../../libs/icons';
import BtnPrimary from '../smallComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';

const TutorialModal = () => {
	const setTutorModal = useSetAtom(tutorModalAtom);

	const handle = () => {
		setTutorModal(false);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Tutorial" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto flex h-full w-3/4 flex-col gap-4 overflow-y-auto rounded-sm bg-slate-500 p-6 shadow-lg">
					<section className=" w-full text-sm">
						<h4 className=" mb-3 w-full text-left text-xl font-bold">
							How to Play
						</h4>
						<ul className=" w-full list-disc px-4 text-left">
							<li className=" mb-2">
								Untuk memainkan permainan ini, anda sebagai pemain akan
								<b> menggunakan kamera perangkat anda</b>, untuk menampilkan
								bentuk tangan yang anda pilih.
							</li>
							<li className=" mb-2">
								<b>Sebelum memulai deteksi</b>, pilih tempat yang memiliki
								cahaya yang terang sehingga gambar yang ditampilkan web cam
								terlihat dengan jelas.
							</li>
							<li className=" mb-2">
								Anda bisa bermain dengan <b>kamera depan (selfie)</b> atau
								dengan <b>kamera belakang</b> smartphone anda.
							</li>
							<li className=" mb-2">
								Letakkan tangan anda di depan kamera dengan bentuk tangan yang
								anda pilih, kemudian tekan tombol kamera untuk memulai proses
								deteksi
							</li>
							<li className=" mb-2">
								Setelah proses selesai, akan ditampilkan bounding box dan class
								yang anda pilih, contohnya Kertas, Gunting, atau Batu
							</li>
							<li className=" mb-2">
								<b>
									Jika class yang ditampilkan sesuai dengan yang anda inginkan
								</b>{' '}
								tekan tombol centang berwarna hijau, tetapi jika tidak sesuai
								anda dapat mengulangi proses deteksi dengan menekan tombol biru
							</li>
							<li className=" mb-2">
								<b>Jika proses deteksi tidak menemukan apa-apa</b>, maka anda
								harus memulai ulang deteksi. Hal ini terjadi jika gambar kurang
								jelas, atau terlalu banyak warna pada gambar, sehingga
								disarankan anda menggunakan background yang satu warna.
							</li>
						</ul>
					</section>
				</div>
			</div>

			<div className="mx-auto w-3/4 max-w-md text-center">
				<BtnPrimary
					btnIcon={<GoBackIcon cls="w-full text-lg scale-150" />}
					btnFunction={handle}
					btnStyles="bg-slate-500 hover:bg-gray-700 "
				/>
			</div>
		</div>
	);
};

TutorialModal.propTypes = {};

export default TutorialModal;

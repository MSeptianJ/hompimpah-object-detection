import ILUST from '../../assets/img/KGB.svg';

const TutorialText = () => {
	return (
		<>
			<h5 className=" w-full rounded-sm bg-blue-400 p-2 text-sm font-bold">
				Diharapkan membaca Tutorial, sebelum bermain.
			</h5>

			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">
					Description
				</h4>
				<p className=" mb-3 px-3 text-left">
					Game Hompimpah ini menggunakan permainan Kertas Gunting Batu untuk
					menentukan pemenang. Perbedaan dari yang lain, aplikasi ini
					menggunakan object detection untuk memilih pilihan. Para pemain akan
					menampilkan tangannya, dan sistem akan mendeteksi pilihan pemain.
				</p>
				<div className=" w-full rounded-md ">
					<img
						className=" mx-auto rounded-sm bg-slate-600 object-contain px-5 py-4"
						src={ILUST}
						alt="Ilustrasi Kertas Gunting Batu"
					/>
				</div>
			</section>

			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">
					How to Play
				</h4>
				<ul className=" w-full list-disc px-4 text-left">
					<li className=" mb-2">
						Untuk memainkan permainan ini, anda sebagai pemain akan
						<b> menggunakan kamera perangkat anda</b>, untuk menampilkan bentuk
						tangan yang anda pilih.
					</li>
					<li className=" mb-2">
						<b>Sebelum memulai deteksi</b>, pilih tempat yang memiliki cahaya
						yang terang sehingga gambar yang ditampilkan web cam terlihat dengan
						jelas.
					</li>
					<li className=" mb-2">
						Tekan tombol kamera dan <b>tampilkan tangan anda</b>.
					</li>
					<li className=" mb-2">
						<b>Tunggu sebentar</b>, dan sistem akan menampilkan hasil deteksi
						dengan adanya <b>bounding box dan class</b>. Bounding box merupakan
						kotak yang mengelilingi tangan anda, sedangkan class merupakan hasil
						deteksi sesuai bentuk tangan anda.
					</li>
					<li className=" mb-2">
						<b>Proses deteksi hanya berlangsung 5 detik</b>. Pada akhir proses
						ini, bentuk yang terakhir terdeteksi akan disimpan dan dijadikan
						pilihan pada ronde tersebut.
					</li>
				</ul>
			</section>
			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">Other</h4>
				<ul className=" w-full list-disc px-4 text-left">
					<li className=" mb-2">
						Jika anda menampilkan kedua tangan,{' '}
						<b>sistem dapat mendeteksi kedua tangan tersebut</b>, tetapi yang
						akan dipilih adalah hasil deteksi dengan nilai keakuratan yang
						paling tinggi.
					</li>
					<li className=" mb-2">
						Kemungkinan sistem <b>tidak mendeteksi apapun</b>, selama 5 detik
						proses pendeteksi dimulai. Jika hal ini terjadi,{' '}
						<b>pilihan anda akan dipilih secara acak</b>. Disarankan, anda
						berpindah ke tempat yang terang dan memastikan bahwa tampilan web
						cam sudah jelas dan terang.
					</li>
					<li className=" mb-2">
						Jika pada{' '}
						<b>
							proses pendeteksian terjadi <i>lag</i> atau membuat device anda
							melambat
						</b>
						. Hapus aplikasi lain yang berjalan. Pastikan tidak ada aplikasi
						yang berjalan, dan hanya web app ini yang anda mainkan. Saya
						sarankan untuk menggunakan device dengan <b>minimal RAM 4GB</b>.
						Jika hal ini terjadi, saya minta anda untuk mengisi kolom kritik
						pada link survey dengan spesifikasi device anda.
					</li>
				</ul>
			</section>
		</>
	);
};

TutorialText.propTypes = {};

export default TutorialText;

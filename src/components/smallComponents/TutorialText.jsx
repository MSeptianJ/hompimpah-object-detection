import ILUST from '../../assets/img/KGB.svg';

const TutorialText = () => {
	return (
		<>
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
				<div className=" w-full ">
					<img
						className=" mx-auto object-contain px-5 py-4"
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
						<b className=" text-accentColor">
							{' '}
							menggunakan kamera perangkat anda
						</b>
						, untuk menampilkan bentuk tangan yang anda pilih.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">Sebelum memulai deteksi</b>, pilih
						tempat yang memiliki cahaya yang terang sehingga gambar yang
						ditampilkan web cam terlihat dengan jelas.
					</li>
					<li className=" mb-2">
						Tekan tombol kamera dan{' '}
						<b className=" text-accentColor">tampilkan tangan anda</b>.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">Tunggu sebentar</b>, dan sistem
						akan menampilkan hasil deteksi dengan adanya{' '}
						<b className=" text-accentColor">bounding box dan class</b>.
						Bounding box merupakan kotak yang mengelilingi tangan anda,
						sedangkan class merupakan hasil deteksi sesuai bentuk tangan anda.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">
							Proses deteksi hanya berlangsung 10 detik
						</b>
						. Pada akhir proses ini, bentuk yang terakhir terdeteksi akan
						disimpan dan dijadikan pilihan pada ronde tersebut.
					</li>
				</ul>
			</section>
			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">Other</h4>
				<ul className=" w-full list-disc px-4 text-left">
					<li className=" mb-2">
						Jika anda menampilkan kedua tangan,{' '}
						<b className=" text-accentColor">
							sistem dapat mendeteksi kedua tangan tersebut
						</b>
						, tetapi yang akan dipilih adalah hasil deteksi dengan nilai
						confidence (nilai persentase) yang paling tinggi.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">
							Jika sistem tidak mendeteksi apapun
						</b>{' '}
						selama proses deteksi berlangsung. Pilihan anda menjadi kosong,
						tetapi tidak akan mengakibatkan anda kalah pada ronde tersebut.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">
							Jika pada proses pendeteksian terjadi <i>lag</i> atau membuat
							device anda melambat
						</b>
						. Pastikan tidak ada aplikasi yang berjalan, dan hanya web app ini
						yang anda mainkan.
					</li>
					<li className=" mb-2">
						<b className=" text-accentColor">
							Data kamera hanya digunakan untuk mendeteksi
						</b>
						. Semua data permainan akan dihapus setelah pemain kembali ke menu
						awal.
					</li>
				</ul>
			</section>
		</>
	);
};

TutorialText.propTypes = {};

export default TutorialText;

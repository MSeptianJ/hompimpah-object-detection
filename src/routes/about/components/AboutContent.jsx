const AboutContent = () => {
	return (
		<>
			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">The Goal</h4>
				<p className=" mb-3 px-3 text-left">
					Tujuan utama dari Game Hompimpah adalah melestarikan permainan
					permainan kecil untuk melakukan proses penentuan siapa dulu yang
					bermain atau yang disebut Hompimpah. Oleh karena itu, game Hompimpah
					adalah kumpulan permainan kecil seperti Kertas Gunting Batu.
				</p>
				<p className=" px-3 text-left">
					Untuk membantu hal tersebut, diterapkan teknologi baru seperti object
					detection agar menarik perhatian pengguna. Object detection ini
					dikembangkan menggunakan machine learning sehingga dapat dikembangkan
					lagi agar dapat mendeteksi hal lain juga.
				</p>
			</section>

			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">Assets</h4>
				<p className=" mb-1 px-3 text-left">
					Sound Effects from{' '}
					<a
						href="https://www.zapsplat.com/sound-effect-category/button-clicks/"
						className=" font-bold text-black"
						target="blank"
					>
						ZapSplat
					</a>
				</p>
				<p className=" mb-1 px-3 text-left">
					Ilustration from{' '}
					<a
						href="https://www.vecteezy.com/vector-art/690792-rock-paper-scissors-hand-icons"
						className=" font-bold text-black"
						target="blank"
					>
						Vecteezy
					</a>
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
		</>
	);
};

export default AboutContent;

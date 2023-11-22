const AboutContent = () => {
	return (
		<>
			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">The Goal</h4>
				<p className=" mb-3 px-3 text-left">
					Melestarikan permainan permainan kecil dengan menerapkan teknologi
					Object detection pada proses Hompimpah.
				</p>
				<p className=" px-3 text-left">
					Proses Hompimpah adalah penentuan siapa dulu yang bermain atau dapat
					disebut juga dengan pengundian pada awal permainan. Oleh karena itu,
					game Hompimpah adalah kumpulan permainan kecil seperti Kertas Gunting
					Batu.
				</p>
			</section>

			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">Assets</h4>
				<p className=" mb-1 px-3 text-left">
					Sound Effects from{' '}
					<a
						href="https://www.zapsplat.com"
						className=" font-bold text-black"
						target="blank"
					>
						ZapSplat
					</a>
				</p>
				<p className=" mb-1 px-3 text-left">
					Rock Paper Ilustration from{' '}
					<a
						href="https://www.vecteezy.com/vector-art/690792-rock-paper-scissors-hand-icons"
						className=" font-bold text-black"
						target="blank"
					>
						Vecteezy
					</a>
				</p>
				<p className=" mb-1 px-3 text-left">
					Win and Lose Ilustration from{' '}
					<a
						href="https://www.freepik.com/free-vector/anxiety-concept-illustration_20908543.htm#query=lose&position=2&from_view=search&track=sph"
						className=" font-bold text-black"
						target="blank"
					>
						Freepik
					</a>
				</p>
			</section>

			<section className=" w-full text-sm">
				<h4 className=" mb-3 w-full text-left text-xl font-bold">
					Development
				</h4>
				<p className=" mb-3 px-3 text-left">
					Pengembangan permainan ini dilakukan oleh @mseptianj
				</p>
			</section>
		</>
	);
};

export default AboutContent;

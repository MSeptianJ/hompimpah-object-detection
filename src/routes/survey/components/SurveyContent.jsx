const SurveyContent = () => {
	return (
		<>
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
		</>
	);
};

export default SurveyContent;

import ILUST from '../../../assets/img/thank-you.svg';
import { LinkIcon } from '../../../libs/icons';

const SurveyContent = () => {
	return (
		<>
			<section className=" row-span-3 w-full items-start text-left text-sm text-backColor">
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

			<div className=" row-span-2 h-full w-full">
				<img
					src={ILUST}
					alt="Thank you Ilustration"
					className=" h-full w-full"
				/>
			</div>

			<div className="group mx-auto rounded-sm bg-accentColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:border hover:border-accentColor hover:bg-primaryColor">
				<a
					className="  m-auto flex items-center px-5 py-2 font-bold"
					href="https://forms.gle/qwubutqV8S4oj6MR8"
					target="blank"
				>
					Survey
					<LinkIcon className=" ml-3 h-5 w-5 text-primaryColor group-hover:text-accentColor" />
				</a>
			</div>
		</>
	);
};

export default SurveyContent;

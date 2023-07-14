import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnList = ({ url, text }) => {
	return (
		<li className=" my-8 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
			<Link className=" m-auto block w-full cursor-pointer p-4" to={url}>
				{text}
			</Link>
		</li>
	);
};

BtnList.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default BtnList;

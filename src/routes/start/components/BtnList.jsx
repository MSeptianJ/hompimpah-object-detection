import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnPrimary from '../../../components/smallComponents/BtnPrimary';

const BtnList = ({ url, text }) => {
	return (
		<li className=" my-4 w-full rounded-md bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
			<Link className="" to={url}>
				<BtnPrimary text={text} btnStyles="" />
			</Link>
		</li>
	);
};

BtnList.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default BtnList;

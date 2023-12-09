import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../../components/btnComponents/BtnPrimary';

const BtnList = ({ url, text, func }) => {
	return (
		<li className=" my-4 w-full rounded-sm bg-slate-300 font-bold uppercase text-slate-600 hover:bg-opacity-80">
			<Link className="" to={url}>
				<BtnPrimary btnText={text} btnStyles="" btnFunction={func} />
			</Link>
		</li>
	);
};

BtnList.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	func: PropTypes.func,
};

export default BtnList;

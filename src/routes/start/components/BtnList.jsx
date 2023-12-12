import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../../components/btnComponents/BtnPrimary';
import { AngleRightIcon } from '../../../libs/icons';

const BtnList = ({ url, text, func }) => {
	return (
		<li className=" group relative my-4 w-full rounded-md bg-primaryColor text-backColor shadow-lg transition-colors hover:bg-accentColor">
			<Link to={url}>
				<BtnPrimary
					btnText={text}
					btnFunction={func}
					btnStyles={'w-full p-4 flex items-center'}
					btnIcon={
						<AngleRightIcon className=" mr-4 h-6 w-6 text-accentColor group-hover:text-primaryColor" />
					}
				/>
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

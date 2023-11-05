import axios from 'axios';

const FetchImgDetection = async (img) => {
	try {
		const response = await axios({
			method: 'POST',
			url: 'https://detect.roboflow.com/rockpaperscissors-t0zfu/1',
			params: {
				api_key: <></>,
			},
			data: img,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		return response.data;
	} catch (error) {
		return error.message;
	}
};

export default FetchImgDetection;

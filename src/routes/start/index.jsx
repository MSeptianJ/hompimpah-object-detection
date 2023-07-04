const Start = () => {
	return (
		<div className="m-auto flex h-full w-full max-w-lg flex-col justify-center bg-slate-600 text-center">
			<div className=" w-full p-4 text-center text-red-400">
				<h1 className=" text-4xl font-bold uppercase">
					AR Rock Paper Scissors
				</h1>
			</div>
			<div className=" w-full p-4">
				{/* <div className=" m-auto w-3/4">
					<ul className=" w-full">
						{textMenus.map((textMenu, i) => (
							<BtnList key={i} url={textMenu.url} text={textMenu.text} />
						))}
					</ul>
				</div> */}
			</div>
		</div>
	);
};

export default Start;

import Image from "next/image";
import React from "react";

import { shoe1_main } from "../assets";

type Props = {};

const Picture = (props: Props) => {
	return (
		<div className='w-full h-screen'>
			<Image
				src={shoe1_main}
				alt='Nike Air Force 1 07'
				className='w-full h-full object-contain'
			/>
		</div>
	);
};

export default Picture;

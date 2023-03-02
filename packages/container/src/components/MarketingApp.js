import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
	// getting a ref to div shown to the screen
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	});

	return <div ref={ref} />;
};

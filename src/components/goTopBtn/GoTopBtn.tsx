import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn = () => {
	const [showBtn, setShowBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});
	}, []);

	return (
		<>
			{showBtn && (
				<StyledGoToBtn
					onClick={() => {
						scroll.scrollToTop();
					}}
				>
					<Icon
						iconId={'arrow'}
						height={'15'}
						width="'16'"
						viewBox={'0 0 16 15'}
					/>
				</StyledGoToBtn>
			)}
		</>
	);
};

const StyledGoToBtn = styled.button`
	position: fixed;
	right: 30px;
	bottom: 30px;
	background-color: rgba(0, 0, 0, 0.3);
	padding: 8px;
`;

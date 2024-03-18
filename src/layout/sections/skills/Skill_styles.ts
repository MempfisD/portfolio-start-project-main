import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Skills = styled.section`
	position: relative;
`;

const Skill = styled.div`
	width: 330px;
	flex-grow: 1;
	padding: 42px 20px 52px;

	@media ${theme.media.mobile} {
		padding: 62px 0 40px;
	}
`;

export const IconWrapper = styled.div`
	position: relative;
	z-index: 1;

	&::before {
		content: '';
		display: inline-block;
		width: 80px;
		height: 80px;
		background: rgba(255, 255, 255, 0.1);
		transform: rotate(45deg) translate(-50%, -50%);

		position: absolute;
		left: 50%;
		top: 50%;
		transform-origin: top left; // *  точка позиционирования
		z-index: -1;
	}
`;

const SkillTitle = styled.h3`
	text-transform: uppercase;
	margin: 70px 0 15px;
`;

const SkillText = styled.p`
	text-align: center;
`;

export const S = {
	Skills,
	Skill,
	IconWrapper,
	SkillTitle,
	SkillText,
};

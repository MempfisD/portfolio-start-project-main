import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Contacts = styled.section`
	position: relative;
`;

const Form = styled.form`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 540px;
	width: 100%;
	gap: 16px;

	textarea {
		resize: none;
		height: 155px;
	}
`;

const Field = styled.input`
	width: 100%;
	padding: 7px 15px;
	background-color: ${theme.colors.secondaryBg};
	border: 1px solid ${theme.colors.borderColor};

	font-family: 'Poppins', sans-serif;
	color: ${theme.colors.font};
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;

	&::placeholder {
		color: ${theme.colors.placeholderColor};
		text-transform: capitalize;
	}

	&:focus-visible {
		outline: 1px solid ${theme.colors.borderColor};
	}
`;

export const S = {
	Contacts,
	Form,
	Field,
};

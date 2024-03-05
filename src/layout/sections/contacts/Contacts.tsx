import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';

export const Contacts = () => {
	return (
			<StyledContacts>
				<Container>
					<SectionTitle>Contact</SectionTitle>
					<StyledForm>
						<Field placeholder={'name'}/>
						<Field placeholder={'subject'}/>
						<Field placeholder={'message'} as={'textarea'}/>
						<Button type={'submit'}>Send message</Button>
					</StyledForm>
				</Container>
			</StyledContacts>
	);
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
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
`

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
`
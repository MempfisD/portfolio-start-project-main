import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skill_styles';

const skillData = [
	{
		iconId: 'code',
		title: 'HTML5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'css',
		title: 'CSS3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'react',
		title: 'REACT',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'typeScript',
		title: 'TYPESCRIPT',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'styledComponents',
		title: 'styled components',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
	{
		iconId: 'figma',
		title: 'WEB DESIGN',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
	},
];

export const Skills = () => {
	return (
		<S.Skills id='skills'>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-between'}>
					{skillData.map((s, index) => {
						return (
							<Skill
								iconId={s.iconId}
								key={index}
								title={s.title}
								description={s.description}
							/>
						);
					})}
				</FlexWrapper>
			</Container>
		</S.Skills>
	);
};

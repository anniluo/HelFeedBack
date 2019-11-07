import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;

	${media.tabPort} {
		margin-bottom: 3rem;
	}

	${media.phone} {
		align-items: center;
	}
`

export const StyledArrowImage = styled.img`
	width: 6rem;
	height: auto;

	${media.phone} {
		display: none;
	}
`

export const TitleContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: auto;
	height: auto;

	${media.phone} {
		display: none;
	}
`

export const InstructionButton = styled.div`
	background-color: ${props => props.theme.appColors.secondary};
	font-size: ${props => props.theme.fontSizes.xl};
	border-radius: 1rem;
	padding: 0.7rem;
	width: 3rem;
	height: 3rem;
	margin-left: 1rem;
	font-weight: bold;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const QuestionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 2rem;
	background-color: ${props => props.theme.appColors.secondary};
	padding: 1.6rem;
	height: 11rem;

	${media.tabPort} {
		margin-bottom: 5rem;
	}
`

export const ContentContainer = styled.div`
	text-align: center;
	padding: 0.5rem;
`

export const DataImage = styled.img`
	width: 10rem;
	height: auto;

	${media.phone} {
		width: 14.4rem;
	}
`

export const AnswerContainer = styled.div`
	display: flex;
	justify-content: space-around;

	padding: 1.5rem;

	${media.phone} {
		display: none;
	}
`

export const AnswerContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const AnswerImage = styled.img`
	width: 15rem;
	height: 15rem;
	margin-bottom: 0.3rem;
	cursor: pointer;
	transform: scale(0.8);
	transition: all 0.2s ease-in;

	:hover {
		transform: scale(1);
	}
`

export const AnswerLabelContainer = styled.div`
	text-align: center;
`

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const MobileAnswerContainer = styled.div`
	display: none;

	${media.phone} {
		display: block;
	}
`

export const DataContent = styled.h1`
	${media.phone} {
		font-size: ${props => props.theme.fontSizes.xxl};
	}
`

export const StyledFooter = styled.div`
	display: none;

	${media.phone} {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: space-around;
	}
`

export const MobileStyledArrowImage = styled.img`
	display: none;

	${media.phone} {
		display: block;
		width: 6rem;
		height: auto;
	}
`
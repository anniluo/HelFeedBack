import styled from 'styled-components'
import {hoverEffect} from '../Header/style'

export const PopupBackground = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const PopupContainer = styled.div`
	position: relative;
	width: 40rem;
	height: 47rem;
	background-color: white;

	border-radius: 2rem;
	padding: 1.6rem;
`

export const CloseContainer = styled.div`
	position: absolute;
	left: 1rem;
	top: 1rem;
	font-size: ${props => props.theme.fontSizes.lg};
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	background-color: ${props => props.theme.colors.lightGrey};
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	${hoverEffect}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	overflow: scroll;
	align-items: center;

	height: 100%;
`

export const StyledTitle = styled.h1`
	text-align: center;
	margin-top: 3.6rem;
	font-size: ${props => props.theme.fontSizes.xl};
`

export const LabelImg = styled.img`
	width: auto;
	height: 20rem;
	margin-top: 2.4rem;
`

export const PopupContent = styled.p`
	margin-top: 2.4rem;
`
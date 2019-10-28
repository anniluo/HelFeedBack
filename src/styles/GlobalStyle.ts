import {createGlobalStyle} from 'styled-components'
import {media} from './utils'

export const GlobalStyle = createGlobalStyle`
:root {
	font-size: 62.5%;
		
	${media.tabLand} {
		font-size: 56.25%;
	}
		
	${media.tabPort} {
		font-size: 50%;
	}
}
 body {
		font-family: ${props => props.theme.fontStack};
		font-weight: 400;
		line-height: 1.7;
		color: ${props => props.theme.appColors.text} ;
		font-size: ${props => props.theme.fontSizes.md} ;
	}
	h1 {
		margin: 0;
		font-size: ${props => props.theme.fontSizes.xl};
	}
	h2 {
		text-transform: uppercase;
		font-size: ${props => props.theme.fontSizes.lg};
	}
`
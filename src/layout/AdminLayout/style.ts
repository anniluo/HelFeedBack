import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	padding: 4.5rem;

	${media.phone} {
		padding-top: 0;
		padding: 0 1rem;
	}
`

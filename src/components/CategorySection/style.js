import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
    gap: 10px;
`

export const TitleText = styled.Text`
    font-size: 20px;
    font-weight: 700;        
`

export const HighlightText = styled.Text`
    color: #375EE7;
`

export const Scroll  = styled.ScrollView.attrs({
	contentContainerStyle:{
		gap: 20
	}
})``

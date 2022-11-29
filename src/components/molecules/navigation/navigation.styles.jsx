import styled from "styled-components";

const StyledNavigation = styled.nav`
	display: flex;
	padding: 16px;
	flex-direction: ${props => props.direction === "horizontal" ? "row" : "column" };

	a + a {
		margin-left: ${props => props.direction === "horizontal" ? "24px" : "0" };
		margin-top: ${props => props.direction !== "horizontal" ? "24px" : "0" };
	}
`;

export { StyledNavigation };

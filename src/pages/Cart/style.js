import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100svh;
	width: 100%;
	padding: 15px;
	background-color: #739AFF;
`;

export const Wrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	padding: 20px;
	border-radius: 10px;
	min-height: 600px;
	background-color: white;
	box-shadow: 1px 2px 5px #909090;
`;

export const Typographys = styled(Typography)`
	font-family: Poppins !important;
`;
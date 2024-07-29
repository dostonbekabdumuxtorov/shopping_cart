import styled from "styled-components";
import { Grid, TextField, Typography } from "@mui/material";

export const Container = styled.div`
    min-height: 400px;
    width: 100%;
    border-radius: 15px;
    padding: 25px;
    background: #565abb;
    color: #fff;
`;

export const CardDetails = styled(Grid)`
    margin-top: 20px;
`;

export const CardType = styled(Grid)`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: auto;
        margin-right: 10px;
    }

    button {
        background: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
`;

export const RgbBox = styled.div`
	background-color: #7073C1;
	border-radius: 5px;
	padding: 4px;
	height: 55px;
	width: 77px;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover{
		cursor: pointer;
		background-color: #6268C6;
	}
	img{
		width: 55px;

	}
	button{
		width: 100%;
		height: 100%;
		background: none;
		border: none;
		color: white;
		font-family: Poppins, sans-serif !important;
	}
`;

export const CardInput = styled(TextField)`
    & .MuiOutlinedInput-root {
		background-color: #6268C6;
        color: #fff;
        & fieldset {
            border-color: #6268C6;
        }
        &:hover fieldset {
            border-color: #6268C6;
        }
        &.Mui-focused fieldset {
            border-color: #6268C6;
        }
    }
    & .MuiInputBase-input::placeholder {
        color:#C4C4C4;
		font-family: Poppins !important;
    }
`;

export const CardLabel = styled(Typography)`
    margin-bottom: 5px;
    color: white;
	font-family: Poppins !important;
`;

export const CardFooter = styled.div`
    margin-top: 20px;
    & > div {
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    background: #2dca73;
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 10px 20px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
	font-family: Poppins, sans-serif !important;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background: #28b565;
    }
`;

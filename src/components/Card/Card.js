import {
    ButtonGroup,
    Grid,
    IconButton,
} from "@mui/material";
import React from "react";
import { Typographys } from "../../pages/Cart/style";
import {ArrowDropDown,ArrowDropUp} from "@mui/icons-material";
import { Buttony, CardContainer, DeleteIcon } from "./style";

function Card({item,handleClick,handleIncrement,handleDecrement}) {
    return (
        <CardContainer>
            <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
            >
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2}>
                        <Grid item>
                            <img
                                src={item.img}
                                alt="image"
                                width={80}
                                height={80}
								style={{borderRadius:5,objectFit:'cover'}}
                            />
                        </Grid>
                        <Grid item mt={-0.3}>
                            <Typographys
                                variant="subtitle2"
                                sx={{ fontWeight: "600" }}
                            >
                                {item.name}
                            </Typographys>
                            <Typographys variant="body2" sx={{ fontSize: 12 }}>
                                {item.description}
                            </Typographys>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mt={-0.3} alignItems={"center"}>
                    <Grid
                        container
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                    >
                        <Grid item>
                            <Typographys
                                variant="h6"
                                sx={{ fontWeight: "600" }}
                            >
                                {item.count}
                            </Typographys>
                        </Grid>
                        <Grid item>
                            <ButtonGroup
								variant="primary"
                                orientation="vertical"
                                aria-label="Vertical button group"
                            >
                                <Buttony onClick={()=>handleIncrement(item.id)}>
                                    <ArrowDropUp sx={{ fontSize: 25 }} />
                                </Buttony>
                                <Buttony onClick={()=>handleDecrement(item.id)}>
                                    <ArrowDropDown sx={{ fontSize: 25 }} />
                                </Buttony>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typographys variant="body2" >
                        $ {item.price*item.count}
                    </Typographys>
                </Grid>
                <Grid item mt={-0.3}>
                    <IconButton onClick={()=>handleClick(item.id)}>
                        <DeleteIcon src={'/delete_icon.png'} />
                    </IconButton>
                </Grid>
            </Grid>
        </CardContainer>
    );
}

export default Card;

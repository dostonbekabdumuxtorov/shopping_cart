import React, { useEffect, useState } from "react";
import useIndexedDB from "./api";
import { Products_Data, Taxes } from "../../data/products";
import { Container, Typographys, Wrapper } from "./style";
import { Divider, Grid, Typography } from "@mui/material";
import { KeyboardArrowLeft} from "@mui/icons-material";
import Card from "../../components/Card/Card";
import Plastic from "../../components/Plastic/Plastic";

const Cart = () => {
    const { getData, dbInitialized, deleteData, updateData } = useIndexedDB(
        "myDatabase00",
        "myObjectStore",
        Products_Data
    );
    const [retrievedData, setRetrievedData] = useState(null);

    useEffect(() => {
        if (dbInitialized) {
            const fetchData = async () => {
                const data = await getData();
                setRetrievedData(data);
            };
            fetchData();
        }
    }, [dbInitialized, getData]);

    const handleDeleteData = async (id) => {
        let isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            if (dbInitialized) {
                await deleteData(id);
                const data = await getData();
                setRetrievedData(data);
            }
        }
    };

    const handleIncrement = (id) => {
        const updatedProducts = retrievedData?.map((product) => {
            if (product.id === id) {
                const updatedProduct = { ...product, count: product.count + 1 };
                updateData(id, updatedProduct);
                return updatedProduct;
            }
            return product;
        });
        setRetrievedData(updatedProducts);
    };

    const handleDecrement = (id) => {
        const updatedProducts = retrievedData?.map((product) => {
            if (product.id === id && product.count > 1) {
                const updatedProduct = { ...product, count: product.count - 1 };
                updateData(id, updatedProduct);
                return updatedProduct;
            }
            return product;
        });
        setRetrievedData(updatedProducts);
    };

    const priceInfo = () => {
        let subtotal = 0;
        retrievedData?.forEach((item) => {
            subtotal += item.price * item.count;
        });
        return { subtotal, tax: Taxes.tax, total: subtotal + Taxes.tax };
    };

    return (
        <Container>
            <Wrapper>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} lg={7}>
                        <Grid
                            sx={{
                                "&:hover": { cursor: "pointer", color: "blue" },
                            }}
                            container
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1.4}
                        >
                            <Grid item>
                                <KeyboardArrowLeft />
                            </Grid>
                            <Grid item mt={-0.3}>
                                <Typographys
                                    variant="subtitle2"
                                    sx={{ fontWeight: "600" }}
                                >
                                    Shopping Continue
                                </Typographys>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} mt={1}>
                            <Typographys variant="subtitle2">
                                Shopping cart
                            </Typographys>
                            <Typographys variant="body2" sx={{ fontSize: 11 }}>
                                You have {retrievedData?.length} item in your
                                cart
                            </Typographys>
                        </Grid>
                        <Grid container spacing={2} mt={0}>
                            {retrievedData?.map((item, index) => (
                                <Grid key={index} item xs={12}>
                                    <Card
                                        item={item}
                                        handleClick={handleDeleteData}
                                        handleDecrement={handleDecrement}
                                        handleIncrement={handleIncrement}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} lg={5}>
                        <Plastic priceInfo={priceInfo()} />
                    </Grid>
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Cart;

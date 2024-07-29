import React from 'react'
import { Container, CardDetails, CardType, CardInput, CardLabel, CardFooter, Button, RgbBox } from './style'
import { Grid, Typography } from '@mui/material'

function Plastic({priceInfo}) {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "600", color: "#fff" }}>Card Details</Typography>
        </Grid>
        <Grid item>
          <img width={50} height={50} style={{ borderRadius: 8 }} src='/square_user.png' alt="User" />
        </Grid>
      </Grid>

      <CardDetails container spacing={2}>
        <Grid item xs={12}>
          <CardType container spacing={1}>
            <Grid item><RgbBox><img src="/card11.webp" alt="MasterCard" /></RgbBox></Grid>
            <Grid item><RgbBox><img src="/card22.png" alt="Visa" /></RgbBox></Grid>
            <Grid item><RgbBox><img src="/card33.png" alt="RuPay" /></RgbBox></Grid>
            <Grid item><RgbBox><button>See all</button></RgbBox></Grid>
          </CardType>
        </Grid>
        <Grid item xs={12}>
          <CardLabel variant='body2'>Name on card</CardLabel>
          <CardInput size='small' fullWidth variant="outlined" placeholder="Name" />
        </Grid>
        <Grid item xs={12}>
          <CardLabel variant='body2'>Card Number</CardLabel>
          <CardInput size='small' fullWidth variant="outlined" placeholder="1111 2222 3333 4444" />
        </Grid>
        <Grid item xs={6}>
          <CardLabel variant='body2'>Expiration date</CardLabel>
          <CardInput size='small'  fullWidth variant="outlined" placeholder="mm/yy" />
        </Grid>
        <Grid item xs={6}>
          <CardLabel variant='body2'>CVV</CardLabel>
          <CardInput size='small' fullWidth variant="outlined" placeholder="123" />
        </Grid>
      </CardDetails>

      <CardFooter style={{fontSize:13}}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>Subtotal</Grid>
          <Grid item>${priceInfo.subtotal}</Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>Shipping</Grid>
          <Grid item>${priceInfo.tax}</Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item >Total (Tax incl.)</Grid>
          <Grid item>${priceInfo.total}</Grid>
        </Grid>
      </CardFooter>

      <Button onClick={()=>alert("Payment Successful")}>${priceInfo.total} Checkout</Button>
    </Container>
  )
}

export default Plastic

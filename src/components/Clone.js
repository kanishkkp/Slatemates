import React from 'react'
import { Typography } from '@mui/material';

import { Grid } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    typography: {
        h2: {
            padding:20,
            fontSize: 55,
            fontWeight: 800,
        },
        h5: {
            padding:20,
            
            fontSize: 30,
            fontWeight: 600,
        },
        h6: {
            padding:40,
            fontSize: 22,
            fontWeight: 700,
        },
        h3: {
            padding:40,
            fontSize: 40,
            fontWeight: 750,
            lineHeight: 1.2
        }
    }
});

export default function Clone() {
    return (
        <div>
            <ThemeProvider theme={theme}>
               
                <div className='rowE' style={{backgroundColor:'#181357'}}  >
                    <Grid container spacing={15}    alignItems="center">
                        <Grid item xs={12} lg={6} alignItems="center" className='rowC' >
                            <div style={{ width: "100%" }}>
                            <Typography variant="h2" component="div" style={{ color: "#eb59ae" }}>One-to-one online tuitions from home</Typography>
                            <Typography variant="h5" component="div" style={{ color: "white" }}>Keep your child's studies on track with interactive online tuition</Typography>
                            </div>

                        </Grid>
                        <Grid item lg={6} sm={12} sx={{
                            backgroundColor: { xs: "#181357", lg: "white" }
                        }}>
                            <div >
                                <img  style={{ width: "100%" }} src="https://slatemates.in/_next/image?url=%2Fdesktopheroblock.jpeg&w=640&q=75" alt=""></img>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='rowF'>
                    <Grid container spacing={15} alignItems="center" >
                        <Grid item xs >
                            <div  >
                                <Typography variant="h5" component="div"> 40000+ Tutoring hours</Typography>

                            </div>
                        </Grid>
                        <Grid item xs>
                            <div >
                                <Typography variant="h5" component="div"> 5 star Google reviews</Typography>
                            </div>
                        </Grid>
                        <Grid item xs sx={{
                            display: { xs: "none", lg: "block" }
                        }}>

                            <Typography variant="h5" component="div"> Trusted by 3000+ Students</Typography>

                        </Grid>
                    </Grid>
                </div>
                <div className='rowD' style={{marginTop:"100px",backgroundColor:'#f7f5f4',borderRadius:"50% 50% 50% 50% / 2% 2% 2% 2%"}}>
                    <Grid container spacing={15}  alignItems="center" justifyContent="center">
                        <Grid item xs={12} lg={6} sm={12} justify="left" order={{ sm: 2, lg:1}}>
                            <div  >
                                <Typography variant="h6" component="div">PARENT</Typography>
                                <Typography variant="h3" component="div" style={{ color: "#311b92" }}>"It is rare these days to meet a team of teachers who care deeply. Slatemates 'impact on both my kids' learning needs has been deep. That is why we continue with their tutors every year.."</Typography>
                                <Typography variant="h6" component="div">KHASTHURI SANKARA / Class 12 & 7 / Coimbatore, Tamil Nadu</Typography>
                                <Button variant="contained" style={{backgroundColor:"#311b92",width:"400px"}}>SEE ONLINE TUITION IN ACTION</Button>
                            </div>

                        </Grid>
                        <Grid item xs={12} lg={6} sm={12} order={{ lg: 1, sm:1 }}>
                            <div >
                                <img style={{ width: "100%" }} src="https://slatemates.in/_next/image?url=%2FtestimonialHome.jpeg&w=640&q=75" alt=""></img>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </ThemeProvider>
        </div>
    )
}
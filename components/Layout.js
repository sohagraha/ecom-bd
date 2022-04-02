import Head from 'next/head'
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles'

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>ECOM BD</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>
                        ecom-bd
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All right reserved ecom-bd
                </Typography>
            </footer>
        </div>
    )
}

import Head from 'next/head'
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>ECOM BD</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        ecom-bd
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All right reserved sohag
                </Typography>
            </footer>
        </div>
    )
}

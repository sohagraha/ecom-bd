import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function Layout({ title, description, children }) {
    const classes = useStyles();
    const theme = createTheme({
        components: {
            MuiLink: {
                defaultProps: {
                    underline: 'hover',
                }
            }
        },
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });

    return (
        <>
            <Head>
                <title>{title ? `${title} - ECOM BD` : 'ECOM BD'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>
                                    ecom-bd
                                </Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Log In</Link>
                            </NextLink>
                        </div>
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
            </ThemeProvider>
        </>
    )
}

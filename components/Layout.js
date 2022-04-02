import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles'

export default function Layout({ title, description, children }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - ECOM BD` : 'ECOM BD'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
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
        </div>
    )
}

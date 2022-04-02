import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Image from 'next/image'
import React from 'react'
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@mui/material';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find(a => a.slug === slug);
    if (!product) {
        return <div>Product not Fount</div>
    }
    return (
        <Layout title={product.name} description={product.description}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>Back to Product</Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout='responsive'
                    ></Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography component="h1" variant="h1">
                                {product.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            Category : {product.category}
                        </ListItem>
                        <ListItem>
                            Brand : {product.brand}
                        </ListItem>
                        <ListItem>
                            Brand : {product.rating} start ({product.numReviews} review)
                        </ListItem>
                        <ListItem>
                            Descripton :
                            <Typography>
                                {product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            ${product.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Status
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant='contained' color='primary'>
                                    Add to Cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

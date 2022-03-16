import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MultipleSelect from "../../Commons/MultipleSelect";
import MultipleSelectTwo from "../../Commons/MultipleSelectTwo";
//import MediaCard from "../../Commons/MediaCard";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Test = () => {
    const url = "http://localhost:9999/query/products";
    const [filter, setFilter] = useState({
        name: "",
        price: "",
        type: "",
    });

    const [data, setData] = useState([]);

    const [newData, setNewData] = useState([]);

    const fetchProducts = async () => {
        // await axios
        //     .get(url)
        //     .then((response) => {
        //         // console.log(response.data.Products);
        //         setData(response.data.Products);
        //     })
        //     .catch((error) => console.log(error));
        const resp = await axios.get(url);
        console.log(data, "sebelum");
        setData(resp.data.Products);
        console.log(data, "aihfdpaosdfntoai");
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const filterData = () => {
        // console.log(data);
        const dataaa = data.filter((item) => {
            console.log(filter.name.includes(item.type));
            return filter.name.includes(item.type);
        });
        setData(dataaa);
        console.log(typeof dataaa, "dat");
        setNewData(dataaa);
    };
    useEffect(() => {
        console.log(filter.name);
        console.log(data[0]);
        fetchProducts();
        // console.log(data, "fak3");
        filterData();
        console.log(data, "fak2");
    }, [filter]);

    return (
        <Fragment>
            <div className='FilterContainer'>
                <div className='DropdownContainer'>
                    <MultipleSelect
                        filter={filter}
                        setFilter={setFilter}
                        field={"name"}
                    />
                    {/* <MultipleSelectTwo
                        filter={filter}
                        setFilter={setFilter}
                        field={"type"}
                    /> */}
                </div>
            </div>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((item) => (
                    <Grid item xs={2} sm={4} md={4} key={item}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component='img'
                                height='140'
                                image={item.picture}
                                alt='green iguana'
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'>
                                    {item.product_name}
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    SGD {item.price}.0
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'>
                                    Stock: {item.quantity}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small'>Add to cart</Button>
                                <Button size='small'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <div>Ngentot</div>
        </Fragment>
    );
};

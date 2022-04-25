import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
 display: grid;
  grid-template-columns: 1fr 1fr;

`;

const Books = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            let res = await fetch(`http://localhost:8080/books/`);
            let data = await res.json();
            setData(data);
        } catch (error) {
            console.log("error: ", error);
        }
    };

    useEffect(() => {
        getData();
        // make a GET request to http://localhost:8080/books to get all the books data
    }, []);

    return (
        <>
            <h1>Books</h1>
            <Grid data-testid="books-container">
                {
                    /* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */
                    data.map((items) => {
                        return <BookCard key={items.id} {...items} />;
                    })
                }
            </Grid>
        </>
    );
};
export default Books;

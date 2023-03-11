import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";

const NavBar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: "#00897b" }}>
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    <Button variant={"outlined"}>Логин</Button>
                    <Button variant={"outlined"}>Выйти</Button>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}

export default NavBar;
import React from "react"
import {Box} from "@mui/material"
import Header from "../Common/Header"
import SimpleAPIFetch from "../Common/SimpleAPIFetch";
import Sidebar from "../Common/Sidebar";
// import ImageCollauge from "../Common/ImageCollauge"
// import LoadingSpinner from "../Common/LoadingSpinner"
// import LoadingPage from "./LoadingPage"


const HomePage = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <Box>
        <Header setOpen={setOpen} />
        {/* <ImageCollauge /> */}
        {/* <LoadingSpinner /> */}
        {/* <LoadingPage /> */}
        <p>hidden (delete later)</p>
        <p>hidden (delete later)</p>
        <SimpleAPIFetch />
        <Sidebar open={open} setOpen={setOpen}/>
    </Box>
    );
  };
  
  export default HomePage;
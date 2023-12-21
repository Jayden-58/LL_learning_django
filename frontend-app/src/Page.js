import React from "react"
import { Box } from "@mui/material"
import Header from "./Common/Header"
import HomePage from "./Pages/HomePage"
import Sidebar from "./Common/Sidebar"
import LoadingPage from "./Pages/LoadingPage"


const Page = () => {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
 return (
    <Box>
        <Header setOpen={setOpen} />
        {/* <HomePage /> */}
        <Sidebar open={open} setOpen={setOpen}/>
        <LoadingPage loading={loading} />
    </Box>
 )
}


export default Page
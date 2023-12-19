import {Box, Typography} from "@mui/material"
import Header from "../Common/Header"
import ImageCollauge from "./ImageCollauge"
import LoadingSpinner from "../Common/LoadingSpinner"

const HomePage = () => {
    return (
        <Box>
            <Header />
            <ImageCollauge />
            <LoadingSpinner />
            
        </Box>
    )
}

export default HomePage
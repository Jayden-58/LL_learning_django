import {Box, Typography} from "@mui/material"
import Header from "../Common/Header"
import ImageCollauge from "./ImageCollauge"
import LoadingSpinner from "../Common/LoadingSpinner"
import LoadingPage from "./LoadingPage"

const HomePage = () => {
    return (
        <Box>
            <Header />
            <ImageCollauge />
            {/* <LoadingSpinner /> */}
            <LoadingPage />
        </Box>
    )
}

export default HomePage
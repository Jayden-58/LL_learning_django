import { Box } from "@mui/material"
import LoadingSpinner from "../Common/LoadingSpinner"

const LoadingPage = ({ loading }) => {
    return (
        loading ?
            <Box
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999, // Adjust the z-index as needed
                    width: '100vw',
                    height: '100vh',
                    // backgroundColor: 'black',
                    // opacity: .9,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // pointerEvents: 'none'
                }}
            >
                <LoadingSpinner />
            </Box>

            : <></>
    )
}
export default LoadingPage
import React  from 'react'; 
import '../Components/Banner.css'
import { Button } from "@material-ui/core"


function Banner() {
    return (
        <div className="banner">
            
            <div className="banner_info">
                <h1>Get Out Strech Your Imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button color="primary" variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'
import SearchCard from '../Components/SearchCard'
import '../Components/Search.css';

function Search() {
    return (
        <div className="Search_section">
            <h1>Stay Nearby</h1>
            <SearchCard src="https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Stay in this beautiful interior"
            description="1 Guest  . 1 Bedroom  . 1 Bed  .  1 Kitchen  .  Free Wifi  .  Free Parking "
            price="Rs. 5000/Night"
            />

            <SearchCard src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Nature friendly rooms"
            description="1 Guest  . 1 Bedroom  . 1 Bed  .  1 Kitchen  .  Free Wifi  .  Free Parking "
            price="Rs. 6000/Night"
            />

            <SearchCard src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Luxury rooms"
            description="1 Guest  . 1 Bedroom  . 1 Bed  .  1 Kitchen  .  Free Wifi  .  Free Parking "
            price="Rs. 9000/Night"
            />
          
        </div>
    )
}

export default Search

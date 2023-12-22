import React from "react";

const SimpleAPIFetch = () => {
    const [message, setMessage] = React.useState("unset");
    console.log(message)
  
    React.useEffect(() => {
      const fetchData = async () => {
        const url = 'http://localhost:8090/api/first-album';
  
        try {
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setMessage(data);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
  
      fetchData();
    }, []); 
  

    return (
        <p>{`${message.Title}`}</p>
    )
}

export default SimpleAPIFetch
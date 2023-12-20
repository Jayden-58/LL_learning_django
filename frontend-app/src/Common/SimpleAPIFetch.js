import React from "react";

const SimpleAPIFetch = () => {
    const [message, setMessage] = React.useState("unset");
    console.log(message)
  
    React.useEffect(() => {
      const fetchData = async () => {
        const url = 'http://localhost:8090/api/message';
  
        try {
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          const textValue = data.text;
          setMessage(textValue);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
  
      fetchData(); // Call the asynchronous function inside useEffect
    }, []); // Empty dependency array to run only once on component mount
  

    return (
        <p>{`${message}`}</p>
    )
}

export default SimpleAPIFetch
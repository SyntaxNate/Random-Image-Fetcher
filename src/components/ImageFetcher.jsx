
import React, { useState, useEffect} from "react";  


const ImageFetcher = () => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchImage = async () => {
        setLoading(true); 
        const randomImageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
        setImage(randomImageUrl);
        setLoading(false);
    };

        useEffect(() => {
            fetchImage();
        }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Random Image</h2>
             {loading ? (<p>Loading...</p>) : (<img src={image} alt="A random Image" style={{ width: "300px" }} />)}
            <br />
            <button onClick={fetchImage}>Get New Image</button>
        </div>
    )

   
}   

export default ImageFetcher;

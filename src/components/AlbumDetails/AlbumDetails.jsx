import { useLoaderData, useNavigate } from "react-router-dom";


const AlbumDetails = () => {
    const albumDetails = useLoaderData();
    const { id, title } = albumDetails;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Number of ID: {id}</h2>
            <h3>{title}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default AlbumDetails;
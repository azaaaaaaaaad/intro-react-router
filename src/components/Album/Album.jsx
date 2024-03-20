import { useNavigate } from "react-router-dom";


const Album = ({ album }) => {
    const { id, title } = album;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/album/${id}`)
    }

    const albumStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    }


    return (
        <div style={albumStyle}>
            <h2>Album Id: {id}</h2>
            <h3>Title: {title}</h3>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Album;
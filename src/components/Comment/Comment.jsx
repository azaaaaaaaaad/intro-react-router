import { Link, useNavigate } from "react-router-dom";


const Comment = ({comment}) => {

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/comment/${id}`)
    }
    const {id, name, email} = comment;
    const commentStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={commentStyle}>
            <h2>Comment is :{id}</h2>
            <h3>{name}</h3>
            <h3>{email}</h3>
            {/* <Link to={`/comment/${id}`}>Comment Details</Link> */}
            <button onClick={handleShowDetail}>show details</button>
        </div>
    );
};

export default Comment;
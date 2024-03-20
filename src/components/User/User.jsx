import { Link, useNavigate } from "react-router-dom";


const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/user/${id}`)
    }
    const userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button onClick={handleShowDetails}>Show Detail</button>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
        </div>
    );
};

export default User;
import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    const{name, website}= user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h2>website: {website}</h2>
            {/* <h2>phone: {phone}</h2> */}
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;
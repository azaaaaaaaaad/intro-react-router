import { useLoaderData, useNavigate } from "react-router-dom";


const CommentDetails = () => {


    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    const comment = useLoaderData();
    const {id, body} = comment;
    return (
        <div>
            <h2>Comment datail of id: {id}</h2>
            <h4>{body}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default CommentDetails;
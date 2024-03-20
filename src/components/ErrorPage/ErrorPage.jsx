import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h2>oops! somossa hoise!</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <Link to={`/`}><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
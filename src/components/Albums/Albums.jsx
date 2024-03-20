import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";


const Albums = () => {

    const albums = useLoaderData();
    return (
        <div>
            <h2>Number of Albums {albums.length}</h2>

            <div className="users">
                {
                    albums.map(album =>
                        <Album
                            key={album.id}
                            album={album}
                        ></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;
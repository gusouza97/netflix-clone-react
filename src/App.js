import React, { useEffect } from "react";
import Tmdb from './Tmdb';

export const App = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return(
        <div className="page">
            
        </div>
    );
}


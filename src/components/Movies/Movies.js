import { React } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";


function Movies() {
    
    return (
        <div className="movies">
            <MoviesCardList></MoviesCardList>
            <MoviesCard></MoviesCard>
        </div>
    );
}

export default Movies;
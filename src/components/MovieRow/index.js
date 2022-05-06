import React, { useState } from 'react'
import './styles.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ title, items }) => {

        const [scrollX, setScrollX] = useState(0);

        const handleLeftArrow = () => {
            let positionX = scrollX + Math.round(window.innerWidth / 2);
            
            if(positionX > 0){
                positionX = 0;
            }

            setScrollX(positionX)
        }

        const handleRightArrow = () => {
            let positionX = scrollX - Math.round(window.innerWidth / 2);
            let listW = items.results.length * 150;

            if((window.innerWidth - listW) > positionX){
                positionX = (window.innerWidth - listW) - 60;
            }

            setScrollX(positionX)
        }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <div key={key} className="movieRow--item">
                                <img   
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    alt={item.original_title}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

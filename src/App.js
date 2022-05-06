import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import Header from './components/Header'
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'
import Loading from './img/Loading.gif'

function App() {
    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista total
            let list = await Tmdb.getHomeList()

            const timer = setTimeout(() => {
                setMovieList(list)
            }, 1000)

            // Pegando o Featured
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen];

            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

            setFeaturedData(chosenInfo);
        }

        loadAll()
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className="page">

            <Header black={blackHeader}/>

            {featuredData && <FeaturedMovie item={featuredData}/>}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                <p>Desenvolvido por Gustavo Souza</p>
                <p>Direitos de imagem para Netflix</p>
                <p>Dados recebidos através da API TMDB.</p>
            </footer>
                
                {movieList.length <= 0 &&
                <div className='loading'>
                    <img src={Loading} alt="Carregando"/>
                </div>
                }
        </div>
    )
}

export default App

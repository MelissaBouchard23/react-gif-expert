//import { useState, useEffect } from 'react';

//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    // this is a custom hook (useFetchGifs)
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            {isLoading && (<h2>Cargando...</h2>)}

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem 
                        key={image.id} 
                        {...image} // spread operator pour pitcher toute l'image comme props (title, url, id)
                    />
                ))}
            </div>
        </>
    )
}
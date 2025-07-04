import { useState, useEffect } from "react";
import { getGifs } from "../api/get-gifs";
import { GifImageProps } from "../components/GifGrid";

export const useFetchGifs = ( category: string ) => {

	const [images, setImages] = useState<GifImageProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs({ category });
		
		setImages( newImages );
		setIsLoading( false );
	}
	
	useEffect( () => {
		getImages();
	}, []);

	return {
		images: images,
		isLoading: isLoading
	}
}
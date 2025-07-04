
import { GifItem } from ".";
import { useFetchGifs } from "../hooks/useFetchGifs";

export interface CategoryProps {
	category: string;
}

export interface GifImageProps {
	id: string;
	title: string;
	url: string;
}

export const GifGrid = ({ category }: CategoryProps) => {
  
	const { images, isLoading } = useFetchGifs( category );
	console.log({ images , isLoading });

  return (
	<>
	  <h3>{ category }</h3>

	  { isLoading && <h2>Cargando...</h2> }

	  <div className="card-grid">
	  
	  { images.map( ( image ) => (
		<GifItem key={ image.id } { ...image }/>
	  ) )}

	  </div>
	</>
  )
}



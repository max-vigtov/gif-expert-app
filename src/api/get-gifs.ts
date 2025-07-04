import { CategoryProps } from "../components/GifGrid";

export const getGifs = async ({ category }: CategoryProps) => {
	
	const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ND9Y0i0zZXXzny3DbGiVYqfUh4IVSpAr&q=${ category }&limit=10`);
	const { data = [] } = await resp.json();
	const gifs = data.map( ( img: any) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}))

	console.log( gifs )
	return gifs;
}
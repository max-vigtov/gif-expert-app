import { GifImageProps } from "./GifGrid"

export const GifItem = ({ title, url }: GifImageProps) => {
	
  return (
	<div className="card">
		<img src={ url } alt={ title} />
		<p>{ title }</p>
	</div>
  )
}

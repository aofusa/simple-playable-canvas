
export const Resources = {
	BG: import.meta.env.VITE_RESOURCE_BG
}


export function loadImage(src: string): Promise<HTMLImageElement> {
	console.log('load image: ', src)
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = (e) => reject(e)
		img.src = src
	})
}


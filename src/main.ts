import { setupCanvasGraphics } from './CanvasGraphics';


function main() {
	const appCanvas = document.querySelector<HTMLCanvasElement>("#app-canvas")
	if (appCanvas) {
		console.log(appCanvas)
		setupCanvasGraphics(appCanvas)
	} else {
		console.warn("#app-canvas not found")
	}
}


main()


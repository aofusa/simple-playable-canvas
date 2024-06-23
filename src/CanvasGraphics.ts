import { loadImage, Resources } from './Resources'
import type { DrawableInterface } from './DrawableInterface'
import { MovableObject } from './MovableObject'


type CanvasGraphicsContext = {
	canvasContext: CanvasRenderingContext2D
	image: HTMLImageElement
	playable: DrawableInterface
}


async function initialize(canvas: HTMLCanvasElement): Promise<CanvasGraphicsContext> {
	const ctx = canvas.getContext("2d")

	if (!ctx) {
		console.warn("not HTMLCanvasElement")
		throw "initialize error: not HTMLCanvasElement"
	}

	const image = await loadImage(Resources.BG)
	console.log(image)

	const player = new MovableObject(10, 10, 100, 100)

	const context: CanvasGraphicsContext = {
		canvasContext: ctx,
		image: image,
		playable: player
	}

	return context
}


function eventLoop(context: CanvasGraphicsContext) {
	const ctx = context.canvasContext
	const canvas = ctx.canvas
	const image = context.image
	const player = context.playable
	
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

	player.update()
	player.draw(ctx)
}


export async function setupCanvasGraphics(canvas: HTMLCanvasElement) {
	const context = await initialize(canvas)
	setInterval(eventLoop, 1000/60, context)
}


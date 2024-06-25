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


function eventLoop(context: CanvasGraphicsContext, dt: DOMHighResTimeStamp) {
	const ctx = context.canvasContext
	const image = context.image
	const player = context.playable
	
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height)

	player.update(dt)
	player.draw(ctx)
}


export async function setupCanvasGraphics(canvas: HTMLCanvasElement) {
	const fps = import.meta.env.VITE_STANDARD_FPS
	const fpsMillSecond = 1000 / fps
	let then: DOMHighResTimeStamp = performance.now()
	const context = await initialize(canvas)

	const render = (now: DOMHighResTimeStamp) => {
		const deltaTime = (now - then) / fpsMillSecond  // 1秒間にfpsで規定された時間処理されることを期待する
		then = now

		eventLoop(context, deltaTime)
		requestAnimationFrame(render)
	}

	requestAnimationFrame(render)
}


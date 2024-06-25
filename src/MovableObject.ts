import type { DrawableInterface } from './DrawableInterface'
import { KeyState } from './KeyInput'


export class MovableObject implements DrawableInterface {
	x: number
	y: number
	width: number
	height: number

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	update(dt: DOMHighResTimeStamp) {
		if (KeyState.right) {this.x += 1 * dt}
		if (KeyState.left) {this.x -= 1 * dt}
		if (KeyState.up) {this.y -= 1 * dt}
		if (KeyState.down) {this.y += 1 * dt}
		console.log('dx: ', this.x, ', dy: ', this.y)
	}
	
	
	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "blue"
		ctx.fillRect(this.x, this.y, this.width, this.height)
	}
}


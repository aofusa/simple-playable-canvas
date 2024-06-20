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

	update() {
		if (KeyState.right) {this.x += 1}
		if (KeyState.left) {this.x -= 1}
		if (KeyState.up) {this.y -= 1}
		if (KeyState.down) {this.y += 1}
		console.log('dx: ', this.x, ', dy: ', this.y)
	}
	
	
	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "blue"
		ctx.fillRect(this.x, this.y, this.width, this.height)
	}
}


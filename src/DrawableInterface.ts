
export interface DrawableInterface {
	update(dt: DOMHighResTimeStamp): void
	draw(ctx: CanvasRenderingContext2D): void
}


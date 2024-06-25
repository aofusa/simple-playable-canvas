/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_STANDARD_FPS: number
	readonly VITE_RESOURCE_BG: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}


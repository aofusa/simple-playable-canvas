/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_RESOURCE_BG: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

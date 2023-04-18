import { writable } from 'svelte/store'

export const isSideMenuExpand = writable(false)

export const toggleExpandSideMenu = () => {
	isSideMenuExpand.update((v) => !v)
}

export const isMobile = writable(false)
export const isReady = writable(false)

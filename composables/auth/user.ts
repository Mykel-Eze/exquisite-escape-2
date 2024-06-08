import { ref, computed } from '@vue/reactivity'
import { useStorage } from '@vueuse/core'

const runtimeData = {
	auth: ref() as Record<string, any>,
	user: ref({}) as Record<string, any>,
	token: ref('') as Record<string, any>,
	redirect: ref() as Record<string, any>
}
const localstorageDate = {
	auth: ref() as Record<string, any>,
	user: useStorage('user', {} as Record<string, any>),
	token: useStorage('token', '') as Record<string, any>,
	redirect: useStorage('redirect', '') as Record<string, any>
}
watch(runtimeData.user, (val) => {
	Object.keys(val).forEach((key) => {
		localstorageDate.user.value[key] = val[key]
	})
}, { deep: true });

(() => {
	runtimeData.auth.value = localstorageDate.auth.value
	runtimeData.user.value = localstorageDate.user.value
	runtimeData.token.value = localstorageDate.token.value
	runtimeData.redirect.value = localstorageDate.redirect.value
})()

export const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL as string

export const useUser = () => {
	const id = computed({
		get: () => runtimeData?.auth?.value?.id ?? '', set: () => { }
	})

	const isLoggedIn = computed({
		get: () => {
			if (!runtimeData.token?.value) return false
			return runtimeData?.user?.value != null || undefined || {}
		},
		set: () => { }
	})
	const logOut = () => {
		localStorage.clear()
		runtimeData.user.value = null
		location.href = '/auth/login'
	}
	const setToken = (token: Record<string, any>) => {
		runtimeData.token.value = token?.accessToken
		localstorageDate.token.value = token?.accessToken
	}
	const createUser = (user: any) => {
		runtimeData.user.value = user.userObj
		localstorageDate.token.value = user?.tokenObj?.accessToken
		runtimeData.token.value = user?.tokenObj?.accessToken
	}
	const updateUser = (user: any) => {
		runtimeData.user.value = user
		localstorageDate.user.value = user
	}
		const setRedirect = (redirect: string) => {
		runtimeData.redirect.value = redirect
		localstorageDate.redirect.value = redirect
	}

	return { id, isLoggedIn, createUser, ...runtimeData, logOut, updateUser, setToken, setRedirect }
}

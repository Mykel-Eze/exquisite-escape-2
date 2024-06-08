import { useUser, REDIRECT_URL } from '@/composables/auth/user'
import { useAlert } from '@/composables/core/notification'
import { authApiFactory } from '@/apiFactory/modules/auth'

	const credential = {
		email: ref(''),
		phone: ref<{phone:string, country_code:string}>({ phone: '', country_code: 'NG' }),
		password: ref('')

	}

export const use_auth_login = () => {
	const Router = useRouter()

	const loading = ref(false)
	const auth_type = ref<'email' | 'phone'>('email')

	const disabled = computed({
		get: () => {
			if (credential.email.value !== '' && !credential.email.value.includes('@')) return true
			if (credential.phone.value.phone !== '' && credential.phone.value.phone.length <= 8) return true
			if (credential.password.value === '') return true
			 return false
		},
		set: () => { }
	})

	const login = async () => {
		loading.value = true
		let res
		if (auth_type.value === 'email') {
			 res = (await authApiFactory.$_login({
			email: credential.email.value,
			password: credential.password.value,
			type: 'staff'
		})) as any
		} else {
			 res = (await authApiFactory.$_login({
			...credential.phone.value,
			password: credential.password.value,
			type: 'staff'
		})) as any
		}

		loading.value = false
		if (res.type !== 'ERROR') {
			await useUser().createUser(res.data)
			const redirectUrl = useUser().redirect.value
			useUser().redirect.value = null
			location.assign(redirectUrl ?? '/dashboard')
		}
	}

	return { credential, login, loading, disabled, auth_type }
}

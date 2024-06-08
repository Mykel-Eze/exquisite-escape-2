import { GATEWAY_ENDPOINT } from '../axios.config'
import { useUser } from '@/composables/auth/user'

const { user } = useUser()

export const auth_api = {
	 $_register: (credential: any) => {
		const url = '/users'
		return GATEWAY_ENDPOINT.post(url, credential)
	},
	$_login: (credential: any) => {
		const url = '/login'
		return GATEWAY_ENDPOINT.post(url, credential)
	}
}

const router = useRouter()
export const useSocialSignIn = () => {
    const login = async (provider: string) => {
        router.push('/dashboard')
    }

    return { login }
}
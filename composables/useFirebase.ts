import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, type User } from 'firebase/auth';
import { firebaseConfig } from '@/config/firebaseConfig';
import { useUser } from '@/composables/auth/user'
import { useRouter } from 'vue-router'; 
const { createUser, setToken } = useUser()

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const router = useRouter()
const user = ref<User | null>(null);

onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
  });

export const useFirebase = () => {
  const error = ref<Error | null>(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider) as Record<string, any>;
      console.log(result, 'result here');
      location.href = "http://localhost:3000/dashboard/account"
      const responsePayload = {
         userObj: {
            displayName: result.displayName,
            email: result.email
         },
         tokenObj: result.stsTokenManager
      }
      user.value = result.user;
      createUser(responsePayload)
      setToken(responsePayload.tokenObj)
      await router.push('/dashboard/account')
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider) as Record<string, any>;;
        const responsePayload = {
         userObj: {
            displayName: result.displayName,
            email: result.email
         },
         tokenObj: result.stsTokenManager
      }
      user.value = result.user;
      createUser(responsePayload)
      setToken(responsePayload.tokenObj)
      await router.push('/dashboard/account')
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider) as Record<string, any>;;
        const responsePayload = {
         userObj: {
            displayName: result.displayName,
            email: result.email
         },
         tokenObj: result.stsTokenManager
      }
      user.value = result.user;
      createUser(responsePayload)
      setToken(responsePayload.tokenObj)
      await router.push('/dashboard/account')
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  const signInWithApple = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider) as Record<string, any>;;
        const responsePayload = {
         userObj: {
            displayName: result.displayName,
            email: result.email
         },
         tokenObj: result.stsTokenManager
      }
      user.value = result.user;
      createUser(responsePayload)
      setToken(responsePayload.tokenObj)
      router.push('/dashboard/account')
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      user.value = result.user;
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password) as Record<string, any>;;
        const responsePayload = {
         userObj: {
            displayName: result.displayName,
            email: result.email
         },
         tokenObj: result.stsTokenManager
      }
      user.value = result.user;
      createUser(responsePayload)
      setToken(responsePayload.tokenObj)
      await router.push('/dashboard/account')
    } catch (err: any) {
      error.value = err as Error;
    }
  };

  return {
    user,
    error,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    signInWithApple,
    signInWithEmail,
    signUpWithEmail,
  };
};

// composables/useFirebase.ts
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '@/config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const useFirebase = () => {
  const user = ref(null) as any;
  const error = ref(null) as any;

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
    }
  };

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
    }
  };

  const signInWithApple = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      user.value = result.user;
    } catch (err: any) {
      error.value = err;
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

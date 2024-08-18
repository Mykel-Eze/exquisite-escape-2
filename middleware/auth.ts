import { defineNuxtRouteMiddleware, useRouter } from 'nuxt/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const auth = getAuth();

  const checkAuth = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
  };

  const user = await checkAuth();

  if (!user && to.path !== '/auth') {
    return router.push('/auth');
  }

  if (user && to.path === '/auth') {
    return router.push('/dashboard/account');
  }
});

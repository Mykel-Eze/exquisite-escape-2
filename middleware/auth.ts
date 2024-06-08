import { defineNuxtMiddleware, useContext } from '@nuxtjs/composition-api';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default defineNuxtMiddleware(async (context: any) => {
  const { redirect, route } = context;
  const auth = getAuth();

  const checkAuth = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
  };

  const user = await checkAuth();

  if (!user && route.path !== '/auth') {
    return redirect('/auth');
  }

  if (user && route.path === '/auth') {
    return redirect('/dashboard/account');
  }
});

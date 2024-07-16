import { signIn } from "next-auth/react";

export const login = async (formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
      await signIn('credentials', { email, password})
      //   alert('ok');
      // return router.push('/admin');
    } catch (error) {
      console.log(error);
      // if (error?.message?.includes('CredentialsSignin')) {
      //     return { error: 'Invalid username or password' };
      //   }
      //   throw error;
    }
  };
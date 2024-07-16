import { signIn, signOut } from "next-auth/react";
import Swal from "sweetalert2";

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

  export const handleLogout = async () => {
    // "use server"
    Swal.fire({
        icon:"question",
        text:"Are you sure want to logout?"
    }).then(() => {
        signOut()
    })
  }
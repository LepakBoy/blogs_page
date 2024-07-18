import { signIn, signOut } from "next-auth/react";
import Swal from "sweetalert2";

export const login = async (formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
      await signIn('credentials', { email, password})
    } catch (error) {
      console.log(error, "error login");
      // if (error?.message?.includes('CredentialsSignin')) {
      //     return { error: 'Invalid username or password' };
      //   }
      Swal.fire({
        icon:"error"
      })
        throw error;
    }
  };

  export const loginProviders = async (provider: string) => {

        try {
          // only github for the moment
            await signIn("github");
        } catch (error) {
          console.log(error, 'error gitnub');
        }
  };

  export const handleLogout = async () => {
    Swal.fire({
        icon:"question",
        text:"Are you sure want to logout?",
        cancelButtonText:"cancel",
        showCancelButton: true
    }).then((res) => {
      if(res.isConfirmed){
        Swal.fire({
          icon:"success",
          text:"You're loged out"
        }).then(() => {
          signOut()
        })
      }
    })
  }
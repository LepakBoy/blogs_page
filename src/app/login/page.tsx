// import { getServerSession } from 'next-auth';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import LoginForm from './loginForm/loginForm';
// import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // const session = await getServerSession();
  // const;

  // console.log(session, 'session');
  // if (session.data) {
  //   return redirect('/');
  // }
  //   const session = useSession();
  // const router = useRouter();

  //   console.log(session, 'session');

  //   if (session) {
  //     return redirect('/admin');
  //   }
  return (
    <div>
      <LoginForm />
    </div>
  );
}

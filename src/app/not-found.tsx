import type { NextPage } from 'next';
import { redirect } from 'next/navigation';

const NotFound: NextPage = () => {
  return redirect('/');
};

export default NotFound;

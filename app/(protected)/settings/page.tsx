import { auth } from '@/utils/auth';

export default async function page() {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
}

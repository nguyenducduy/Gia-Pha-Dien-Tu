import PersonProfilePage from './page-client';

export function generateStaticParams() {
  return [{ handle: '__placeholder__' }];
}

export default function Page() {
  return <PersonProfilePage />;
}

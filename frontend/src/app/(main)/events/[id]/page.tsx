import EventDetailPage from './page-client';

export function generateStaticParams() {
  return [{ id: '__placeholder__' }];
}

export default function Page() {
  return <EventDetailPage />;
}

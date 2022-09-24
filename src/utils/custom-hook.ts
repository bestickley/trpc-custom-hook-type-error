import { trpc } from './trpc.js';

type UseTRPCQueryOptions = Parameters<typeof trpc.greeting.useQuery>[1];

export function useInitProduct(opts?: UseTRPCQueryOptions) {
  const query = trpc.greeting.useQuery(
    { name: 'Ben' },
    {
      onSuccess(data) {
        console.log(data);
      },
      ...opts, // TODO: why does this affect onSuccess(data) ?
    }
  );
  return query;
}

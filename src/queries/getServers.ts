const ITEMS_PER_PAGE = 20;

export default async function getServers ({ pageParam = 0 }) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/rpc/getServers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      params: {
        orderBy: { id: "desc" },
        skip: ITEMS_PER_PAGE * pageParam,
        take: ITEMS_PER_PAGE,
      },
      meta: {},
    }),
  });
  const json = await res.json();
  return json;
};
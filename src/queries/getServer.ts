export default async function getServers(serverId: number) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/rpc/getServer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        params: {
          id: serverId,
        },
        meta: {},
      }),
    }
  );
  const json = await res.json();
  return json;
}

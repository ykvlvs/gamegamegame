export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const url = new URL(request.url);
    return new Response(
      JSON.stringify({
        name: 'gamegamegame',
        ok: true,
        missing: true,
        path: url.pathname,
      }, null, 2),
      {
        status: 404,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      },
    );
  },
};

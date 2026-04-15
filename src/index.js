export default {
  async fetch(request) {
    const url = new URL(request.url);

    return new Response(
      JSON.stringify(
        {
          name: 'gamegamegame',
          ok: true,
          method: request.method,
          path: url.pathname,
          timestamp: new Date().toISOString(),
        },
        null,
        2,
      ),
      {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      },
    );
  },
};

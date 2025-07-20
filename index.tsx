import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Podcast – Women in STEM</title>
        <meta name="description" content="Spotlighting up-and-coming women in STEM with powerful stories and bold voices." />
      </Head>
      <main>
        <section style={{ backgroundColor: '#4B1E41', color: '#FDF7F1', padding: '4rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>Alpha</h1>
          <p style={{ fontSize: '1.2rem' }}>A podcast spotlighting bold, brilliant women in STEM.</p>
          <a href="/episodes" style={{ marginTop: '1rem', display: 'inline-block', color: '#D9A441' }}>🎧 Listen to Latest Episode</a>
        </section>
        <section style={{ padding: '2rem' }}>
          <h2>Latest Episode</h2>
          <iframe
            src="https://open.spotify.com/embed-podcast/your-episode-link"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </section>
      </main>
    </>
  );
}

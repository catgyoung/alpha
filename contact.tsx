export default function Contact() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <form action="https://formspree.io/f/your-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required /><br /><br />
        <input type="email" name="_replyto" placeholder="Your Email" required /><br /><br />
        <textarea name="message" placeholder="Your Message"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

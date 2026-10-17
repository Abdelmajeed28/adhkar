export default function Footer() {
  return (
    <footer className="mt-8 border-t-2 border-accent bg-surface py-4 text-center text-sm text-muted">
      <p>لا تنسونا من صالح دعائكم</p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/abdel-majeed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark hover:underline text-bold"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/Abdelmajeed28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark hover:underline text-bold"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

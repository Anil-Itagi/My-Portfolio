export default function HeroSection() {
  
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Anil Itagi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color typing-effect">Full Stack</span>{" "}
            <br />
            <span className="typing-effect">
            Developer
            </span>
          </h1>
          <p className="hero--section-description">
           Computer Science graduate with full-stack development skills and internship experience, eager to contribute and grow in a forward-thinking organization
            {/* <br />  */}
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
        <div className="contact-icons">
  <a
    href="https://www.linkedin.com/in/anil-itagi-663536281/"
    className="icon-link"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
        fill="black"
      />
    </svg>
  </a>

  <a
    href="https://github.com/Anil-Itagi"
    className="icon-link"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="black"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.864 8.163 6.837 9.489.5.093.682-.218.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.087 2.91.832.091-.645.35-1.087.636-1.334-2.22-.251-4.555-1.11-4.555-4.943 0-1.09.39-1.98.996-2.673-.1-.256-.435-1.267.094-2.646 0 0 .813-.266 2.653 1.026A9.641 9.641 0 0 1 12 6.844c.85.004 1.7.113 2.504.331 1.84-1.292 2.653-1.026 2.653-1.026.529 1.379.194 2.39.094 2.646.607.693.996 1.583.996 2.673 0 3.841-2.335 4.687-4.566 4.935.359.307.68.918.68 1.854V22.5c0 .265.182.574.688.481C21.137 20.163 24 16.418 24 12c0-5.523-4.477-10-10-10H12z" />
    </svg>
  </a>
</div>

       
      
      </div>
      <div className="hero--section--img">
        <img src="./img/my_profile.png" alt="Hero Section"/>
      </div>
    </section>
  );
}

import "./Footer.css";

function Footer() {
  return (
    <div className="bg-[antiquewhite] m-0 flex items-center justify-between px-5 py-2 mt-auto">
      <div>
        <img src="defaul.png" alt="Logo" />
      </div>
      <div>
        <ul className="flex list-none gap-5 cursor-pointer font-bold">
          <li>Number</li>
          <li>Email</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

const Nav: string[] = [
  "ბარათები",
  "სადგურები",
  "სიახლეები",
  "შესვლა",
  "რეგისტრაცია",
];

export default function Footer() {
  return (
    <footer className="bg-[#DC3F37] xl:flex xl:flex-col xl:items-center xl:gap-5">
      <h4
        style={{ padding: "10px" }}
        className="text-[#ffffffac] text-center text-[13px] border-b-[1px] border-b-[#ffffff6d] xl:text-[15px] xl:w-full">
        Always Moving Forward
      </h4>
      <div
        style={{ padding: "10px" }}
        className="flex flex-wrap gap-3 items-center border-b-[1px] border-b-[#ffffff6d] xl:w-full xl:justify-center">
        <h4 className="text-white flex">თეგები -</h4>
        <ul className="flex gap-3 flex-wrap">
          {Nav.map((item, index) => {
            return (
              <li
                className="text-[12px] text-[#ffffffaf] cursor-pointer hover:text-white transition-[0.2s]"
                key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ padding: "10px" }} className="flex items-center gap-4">
        <h3 className="text-white">გამოგვყევით</h3>
        <div className="flex items-center gap-3">
          <img src="/assets/icon-facebook.svg" alt="facebook icon" />
          <img src="/assets/icon-instagram.svg" alt="instagram icon" />
          <img src="/assets/icon-twitter.svg" alt="twitter icon" />
        </div>
      </div>
    </footer>
  );
}

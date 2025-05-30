import pricesData from "../prices.json";

export default function Prices() {
  return (
    <>
      <section>
        <ul className="flex flex-col gap-3 items-center md:flex-row md:justify-center flex-wrap">
          {pricesData.map((item, index) => {
            return (
              <li
                key={index}
                style={{ padding: "10px" }}
                className="bg-[#f1f1f1] cursor-pointer w-[190px] rounded-[10px] drop-shadow-xs flex flex-col items-center gap-3 hover:scale-[1.05] hover:shadow-xl transition-[0.2s]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#DC3F37">
                  <path d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-200h240v-280H240v280Zm240 0H240h240Z" />
                </svg>
                <div>
                  <h3 className="text-center text-[14px]">{item.price}</h3>
                  <h2 className="text-[15px]">{item.name}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <h2 className="font-bold text-[#DC3F37] cursor-pointer hover:underline">
        ფასების ისტორია{" "}
      </h2>
    </>
  );
}

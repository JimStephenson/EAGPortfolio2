export default function Accordian({ title, content, links }) {
  return (
    <div className="border-b border-[#232323] mb-4">
      <div className="flex flex-col items-center p-2 sm:p-4 w-full bg-[#232323]">
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        {/* <div className="bg-[#232323] h-8 w-8 flex flex-col justify-center items-center rounded-full"> */}
        <div  className="p-4 bg-[#232323]">
          {content.map((item, index) => (
            <p key={item} className="py-1 text-gray-400 font-sans">
              <a href={links[index]}>{item}</a>
            </p>
            
          ))}
          </div>
        </div>
      </div>
  )}

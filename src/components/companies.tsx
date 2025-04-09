import {companies} from "@/data";

export default function Companies() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 my-15">
      {companies.map((company) => (
        <div key={company.id}>
          <div className="flex md:max-w-60 max-w-32 gap-2">
            <img
              src={company.img}
              alt={company.name}
              className="md:w-10 w-5"
            />
            <img
              src={company.nameImg}
              alt={company.name}
              className="md:w-28 w-20"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
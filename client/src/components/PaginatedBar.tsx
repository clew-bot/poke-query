interface PaginatedBarProps {
  handlePaginate: (page: number) => void;
  page: number;
  setPage: (page: number) => void;
}

const PaginatedBar = ({ handlePaginate, page }: PaginatedBarProps) => {
  return (
    <div
    className="border-2 text-center w-fit p-2 bg-slate-200 rounded-lg m-2"
    >
      <button
      disabled={page === 1}
      className="font-light text-xl px-2 bg-purple-400 rounded-md"
      onClick={() => handlePaginate(Math.max(1, page - 1))}>⬅</button>
      <span 
      className="font-bold text-2xl px-2"
      >{page}</span>
      
      <button
      className="font-light text-xl px-2 bg-purple-400 rounded-md rotate-180"
      onClick={() => handlePaginate(page + 1)}
      >⬅</button>
    </div>
  );
};

export default PaginatedBar;

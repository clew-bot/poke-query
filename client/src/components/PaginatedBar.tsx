interface PaginatedBarProps {
  handlePaginate: (page: number) => void;
  page: number;
  setPage: (page: number) => void;
}

const PaginatedBar = ({ handlePaginate, page, setPage }: PaginatedBarProps) => {
  return (
    <div>
      <button onClick={() => handlePaginate(Math.max(1, page - 1))}>Previous</button>
      <span>{page}</span>
      
      <button
      onClick={() => handlePaginate(page + 1)}
      >Next</button>
    </div>
  );
};

export default PaginatedBar;

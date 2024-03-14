
interface PaginationProps {
  currentPage: number;
  videosPerPage: number;
  videosTotal: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  videosPerPage,
  videosTotal,
  onPageChange,
}) => {
  const pageNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(videosTotal / videosPerPage); i++) {
    pageNumber.push(i);
  }

  const onPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageNumber.length) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="Pagination">
      <div className="flex m-2">
        <button
          className={`text-base rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
          hover:bg-gray-200 bg-gray-100 hover:text-gray-500 border duration-200 ease-in-out 
          border-gray-600 transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-5 h-5 mr-1"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back
          </div>
        </button>
        <button
          className={`text-base rounded-l-none border-l-0 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
          hover:bg-gray-200 bg-gray-100 hover:text-gray-500 border duration-200 ease-in-out 
          border-gray-600 transition ${currentPage >= pageNumber.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={onNextPage}
          disabled={currentPage >= pageNumber.length}
        >
          <div className="flex items-center">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-5 h-5 ml-1"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;

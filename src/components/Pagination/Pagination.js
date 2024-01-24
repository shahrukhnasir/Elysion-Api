import ReactPaginate from "react-paginate";
const PaginatedItems = ({ handlePageClick, pageCount }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default PaginatedItems;

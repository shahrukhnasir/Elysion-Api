import ReactPaginate from "react-paginate";
import styles from "../Pagination/pagination.module.css"
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
        className={styles.pagination}
        activeClassName={styles.pageActive}
        pageLinkClassName={styles.pageLinks}
        previousClassName={styles.pagePrevious}
        nextClassName={styles.pageNext}
        
      />
    </>
  );
};
export default PaginatedItems;

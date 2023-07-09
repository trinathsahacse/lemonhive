type PaginationProps = {
    items: number,
    pageSize:number,
    currentPage:number,
    onPageChange:(value:number)=>void,
}
const Pagination = ({ items, pageSize, currentPage, onPageChange }: PaginationProps) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "pageItemActive" : "pageItem"
              }
            >
              <a className="pageLink" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   export default Pagination;
import type { PaginationProps } from '../../types/types';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pageNumbers = [];

    for (let i = 1; i < totalPages + 1; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.paginationContainer}>
            <button
                className={`${styles.pageButton} ${styles.prevNext}`}
                disabled={currentPage == 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            <ul className={styles.pageList}>
                {pageNumbers.map(page => (
                    <li key={page}>
                        <button
                            className={`${styles.pageButton} ${currentPage == page ? styles.active : ''} `}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                className={`${styles.pageButton} ${styles.prevNext}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </nav>
    )
}

export default Pagination;
type PaginationControlsProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, totalPages, onPageChange }) => (
    <div className="pagination">
        <button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {page} / {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>Next</button>
    </div>
);

export default PaginationControls;

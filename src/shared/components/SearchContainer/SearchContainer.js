import styles from './SearchContainer.module.css'

export function SearchContainer({ className, handleFilterChange, handleSortingChange, handleSearchChange }) {

    return (
        <section className={`${styles.searchFilter}`}>
            <input type='search' className={styles.searchInput} placeholder="Search the website..." onChange={handleSearchChange} />
            <div className={styles.filtersContainer}>
                <div className={styles.selectContainer}>
                    <span class={styles.selectBtnTitle}>Sort by:</span>
                    <select onChange={handleSortingChange} defaultValue="0">
                        <option value="0" selected>Default</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </select>
                </div>
                <div className={`${styles.selectContainer} rounded`}>
                    <span class={styles.selectBtnTitle}>Filter by:</span>
                    <select onChange={handleFilterChange} defaultValue="0">
                        <option value="0" selected>Default</option>
                        <option value="1">Web Development Languages</option>
                        <option value="2">Backend Frameworks and Libraries</option>
                        <option value="3">Databases and APIs</option>
                        <option value="4">Web Development Concepts and Technologies</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
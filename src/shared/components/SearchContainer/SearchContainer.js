import styles from './SearchContainer.module.css'

export function SearchContainer({ className }) {
    return (
        <section className={`${styles.searchFilter}`}>
            <input type='search' className={styles.searchInput} placeholder="Search the website..." />
            <div className={styles.filtersContainer}>
                <div className={styles.selectContainer}>
                    <span class={styles.selectBtnTitle}>Sort by:</span>
                    <select name="" id="">
                        <option value="1">dummy1</option>
                        <option value="2">dummy2</option>
                        <option value="3">dummy3</option>
                    </select>
                </div>
                <div className={`${styles.selectContainer} rounded`}>
                    <span class={styles.selectBtnTitle}>Filter by:</span>
                    <select name="" id="">
                        <option value="1">dummy1</option>
                        <option value="2">dummy2</option>
                        <option value="3">dummy3</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
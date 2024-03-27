import { SearchContainer } from '../shared/components/SearchContainer/SearchContainer';
import { ResultCard } from '../shared/components/ResultCard/ResultCard';
import { LayoutContainer } from '../shared/components/LayoutContainer/LayoutContainer';
// useEffect
import { useState, useEffect } from "react";
import styles from './Home.module.css';

export function Home() {

    const [dataArr, setDataArr] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://tap-web-1.herokuapp.com/topics/list')
            .then(response => response.json())
            .then((json) => {
                setDataArr([...json]);
                setSortedData([...json]);
                setIsLoading(false);
            })
    }, [])

    const handleSearchChange = (event) => {
        let searchValue = event.target.value.toLowerCase();

        if (searchValue === "") {
            setSortedData([...dataArr]);
            return;
        }

        let filterBySearch = dataArr.filter((item) => {
            return item.topic.toLowerCase().includes(searchValue);
        });

        setSortedData(filterBySearch);
    }

    const handleFilterChange = (e) => {
        let filterValue = e.target.value;

        if (Number(filterValue) === 0) {
            setSortedData([...dataArr])
        } else if (Number(filterValue) === 1) {
            setSortedData([...dataArr].filter(e => e.category === "Web Development Languages"));
        } else if (Number(filterValue) === 2) {
            setSortedData([...dataArr].filter(e => e.category === "Backend Frameworks and Libraries"));
        } else if (Number(filterValue) === 3) {
            setSortedData([...dataArr].filter(e => e.category === "Databases and APIs"));
        } else if (Number(filterValue) === 4) {
            setSortedData([...dataArr].filter(e => e.category === "Web Development Concepts and Technologies"));
        }
    }

    const handleSortingChange = (e) => {
        let sortingValue = e.target.value;
        if (Number(sortingValue) === 0) {
            setSortedData([...sortedData].toSorted((a, b) => a.id - b.id))
        } else if (Number(sortingValue) === 1) {
            setSortedData([...sortedData].toSorted((a, b) => a.topic.localeCompare(b.topic)))
        } else if (Number(sortingValue) === 2) {
            setSortedData([...sortedData].toSorted((a, b) => b.topic.localeCompare(a.topic)));
        }
    }

    return (
        <>
            {isLoading && <p>Laoding...</p>}
            {!isLoading &&
                <LayoutContainer>
                    <SearchContainer handleFilterChange={handleFilterChange} handleSortingChange={handleSortingChange} handleSearchChange={handleSearchChange} />
                    <p className={styles.searchResults}>
                        <span id="results-number">"{sortedData.length}"</span>web topic found
                    </p>
                    <div className={styles.showResults}>
                        {
                            sortedData.map((course) => (
                                <ResultCard key={course.id} courseId={course.id} catigory={course.catigory} topic={course.topic} author={course.name} imagePath={course.image} />
                            ))
                        }
                    </div>
                </LayoutContainer>
            }
        </>
    );
}
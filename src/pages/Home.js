import { SearchContainer } from '../shared/components/SearchContainer/SearchContainer';
import { ResultCard } from '../shared/components/ResultCard/ResultCard';
import { LayoutContainer } from '../shared/components/LayoutContainer/LayoutContainer';
// useEffect
import { useState, useEffect } from "react";
import styles from './Home.module.css';

export function Home() {
    const [dataArr, setDataArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://tap-web-1.herokuapp.com/topics/list')
            .then(response => response.json())
            .then((json) => {
                setDataArr([...json]);
                setIsLoading(false);
            })
    }, [])


    return (
        <>
            {isLoading && <p>Laoding...</p>}
            {!isLoading &&
                <LayoutContainer>
                    <SearchContainer />
                    <p className={styles.searchResults}>
                        <span id="results-number">"{dataArr.length}"</span>web topic found
                    </p>
                    <div className={styles.showResults}>
                        {
                            dataArr.map((course) => (
                                <ResultCard key={course.id} courseId={course.id} catigory={course.catigory} topic={course.topic} author={course.name} imagePath={course.image} />
                            ))
                        }
                    </div>
                </LayoutContainer>
            }
        </>
    );
}
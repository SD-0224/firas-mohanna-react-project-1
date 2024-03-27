import styles from './CourseCard.module.css'
import co_styles from '../ResultCard/ResultCard.module.css'
import { IconicButton } from '../IconicButton/IconicButton.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min.js';

export function CourseCard({ author, courseName, imgPath, updateBanner }) {

    const param = useParams();

    const courseID = param.courseId;

    const [dataArray, setDataArray] = useState([]);

    const [buttonText, setButtonText] = useState("Add to Favourite");

    const [buttonIcon, setButtonIcon] = useState("heart-outline")

    useEffect(() => {
        // Retrieve data from local storage when the component mounts
        const storedData = localStorage.getItem('FavouriteCourses');
        if (storedData) {
            setDataArray(JSON.parse(storedData));
        } else {
            localStorage.setItem('FavouriteCourses', []);
        }
    }, []);

    useEffect(() => {
        if (dataArray.includes(`${courseID}`)) {
            setButtonText("Remove from Favourite");
            setButtonIcon("heart");
        } else {
            setButtonText("Add to Favourite");
            setButtonIcon("heart-outline");
        }
    }, [dataArray, courseID])

    const addToLocalStorage = () => {
        // Add an item to the array
        const courseID = param.courseId;
        if (!dataArray.includes(`${courseID}`)) {
            const updatedArray = [...dataArray, courseID];

            // Store the updated array in local storage
            localStorage.setItem('FavouriteCourses', JSON.stringify(updatedArray));

            // Update state to reflect the change
            setDataArray(updatedArray);
            setButtonText("Remove from Favourite");
            setButtonIcon("heart");
        } else if ((dataArray.includes(`${courseID}`))) {
            const favCourses = JSON.parse(localStorage.getItem('FavouriteCourses'));
            const updatedArray = favCourses.filter(e => e !== courseID);
            localStorage.setItem('FavouriteCourses', JSON.stringify(updatedArray));
            setDataArray(updatedArray);
            setButtonText("Add to Favourite");
            setButtonIcon("heart-outline");
        }
    };



    return (
        <div className={styles.CourseCard}>
            <div className={styles.imgContainer}><img src={`${process.env.PUBLIC_URL}/${imgPath}`} alt='course-img'></img></div>
            <div className={styles.courseDetails}>
                <span className={co_styles.author}>
                    <b>{courseName}</b> by <a href>{author}</a>
                </span>
                <div class={styles.subscribe}>
                    <span>Interested about this topic?</span>
                    <IconicButton className={styles.subscribe_btn} text={buttonText} icon={buttonIcon} iconColor={buttonIcon === "heart" ? "red" : "white"} onClick={() => { addToLocalStorage(); updateBanner(); }} />
                    <a href>Unlimited Credits</a>
                </div>
            </div>
        </div>
    )
}
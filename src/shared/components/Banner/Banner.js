import styles from "./Banner.module.css"

export function Banner() {
    return (
        <section className={styles.mainBanner}>
            <div class={styles.bannerText} aria-label="Division contain Welcoming text">
                <span class={styles.welcomeText}>Welcome to our website!</span>
                <span class="breif-text">We have a new design that's fresh, modern, and easy to use.</span>
            </div>
        </section>
    )
}
import styles from './IconicButton.module.css'

export function IconicButton({ className, icon, text, ...buttonProps }) {
    return (
        <button className={`${styles.btn} ${className}`} {...buttonProps}>
            <ion-icon name={icon}></ion-icon>
            <span>{text}</span>
        </button>
    )
}
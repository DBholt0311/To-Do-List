import styles from './Header.module.css'

function Header({ title }) {
    return (
        <header className={styles.appTopper}>
            <div>
                <h1>{title}</h1>
                <a>
                    <i>Lets get started</i>
                </a>
            </div>
        </header>
    )
}

export default Header;
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Storkly</span>
            </h1>
            <p className={headerStyles.description}>
                Reveal the exciting news with friends and family around the world!
            </p>
        </div>
    )
}

export default Header;
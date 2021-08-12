import PageWrapperStyles from "./PageWrapperStyles";

export interface PageWrapperProps {

}

const PageWrapper = (page: () => JSX.Element) : () => JSX.Element => {
    return () => {
        const styles = PageWrapperStyles();

        return <div className={styles.wrapper}>
            {page()}
        </div>
    }
};

export default PageWrapper;
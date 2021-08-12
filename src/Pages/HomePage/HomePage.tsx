import { Typography } from "@material-ui/core"
import QuoteBanner from "../../Components/QuoteBanner/QuoteBanner"
import HomePageStyles from "./HomePageStyles";

interface HomePageProps {

}

const HomePage = () : JSX.Element => {
    const styles = HomePageStyles();
    return <div className={styles.wrapper}>
            <QuoteBanner />
        </div>
};

export default HomePage;
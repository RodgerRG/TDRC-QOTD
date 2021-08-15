import { Typography } from "@material-ui/core";
import ConstructionPageStyles from "./ConstructionPageStyles";


const ConstructionPage = () : JSX.Element => {
    const styles = ConstructionPageStyles();
    return <div className={styles.wrapper}>
                <Typography variant="h2" className={styles.warning}>
                    Not yet implemented!
                </Typography>
                <div className={styles.imageWrapper}>
                    <img src={`${process.env.PUBLIC_URL}/construction.jpg`}
                        alt={'UNDER CONSTUCTION'}
                        className={styles.image}/>
                </div>
        </div>
};

export default ConstructionPage;
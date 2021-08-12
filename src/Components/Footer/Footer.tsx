import { AppBar } from "@material-ui/core"
import FooterStyles from "./FooterStyles";

export interface FooterProps {

}

const Footer = () : JSX.Element => {
    const styles = FooterStyles();

    return <div className={styles.bar}>

    </div>
}

export default Footer;
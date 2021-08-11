import { AppBar } from "@material-ui/core"
import FooterStyles from "./FooterStyles";

export interface FooterProps {

}

const Footer = () : JSX.Element => {
    const styles = FooterStyles();

    return <AppBar position="sticky" className={styles.bar}>

    </AppBar>
}

export default Footer;
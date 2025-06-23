import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from './footer.module.css'
function Footer(){
    return(
     <ul className={styles.social_list}>
         <li><FaFacebook/></li>
         <li><FaInstagram/></li>
         <li><FaLinkedin/></li>
         <p>Nosso rodapé</p>
     </ul>
    )
}

export default Footer
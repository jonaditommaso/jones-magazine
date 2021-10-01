import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const SubMenu = ({item, subItem}) => {
    return ( 
        <>
            {item.subItem && !subItem 
                ? <KeyboardArrowDownIcon />
                : item.subItem
                ? <KeyboardArrowUpIcon />
                : null
            }
        </>
     );
}
 
export default SubMenu;
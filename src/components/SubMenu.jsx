import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const SubMenu = ({item, subItem}) => {
    return ( 
        <div>
            {item.subItem && !subItem 
                ? <KeyboardArrowDownIcon />
                : item.subItem
                ? <KeyboardArrowUpIcon />
                : null
            }
        </div>
     );
}
 
export default SubMenu;
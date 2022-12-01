import { Menu } from 'react-admin';

import PeopleIcon from '@mui/icons-material/People';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/users" primaryText="Students" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/fees" primaryText="Payment details" leftIcon={<CreditScoreIcon />}/>
    </Menu>
);
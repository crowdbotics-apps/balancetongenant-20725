import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile111719Navigator from '../features/UserProfile111719/navigator';
import Tutorial111718Navigator from '../features/Tutorial111718/navigator';
import NotificationList111690Navigator from '../features/NotificationList111690/navigator';
import Settings111689Navigator from '../features/Settings111689/navigator';
import Settings111681Navigator from '../features/Settings111681/navigator';
import UserProfile111679Navigator from '../features/UserProfile111679/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile111719: { screen: UserProfile111719Navigator },
Tutorial111718: { screen: Tutorial111718Navigator },
NotificationList111690: { screen: NotificationList111690Navigator },
Settings111689: { screen: Settings111689Navigator },
Settings111681: { screen: Settings111681Navigator },
UserProfile111679: { screen: UserProfile111679Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

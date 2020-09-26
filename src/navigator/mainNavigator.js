import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList111690Navigator from '../features/NotificationList111690/navigator';
import Settings111689Navigator from '../features/Settings111689/navigator';
import Settings111681Navigator from '../features/Settings111681/navigator';
import UserProfile111679Navigator from '../features/UserProfile111679/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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

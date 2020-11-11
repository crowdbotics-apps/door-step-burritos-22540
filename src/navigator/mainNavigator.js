import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171654Navigator from '../features/Maps171654/navigator';
import Additem171653Navigator from '../features/Additem171653/navigator';
import Maps171649Navigator from '../features/Maps171649/navigator';
import UserProfile171645Navigator from '../features/UserProfile171645/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171654: { screen: Maps171654Navigator },
Additem171653: { screen: Additem171653Navigator },
Maps171649: { screen: Maps171649Navigator },
UserProfile171645: { screen: UserProfile171645Navigator },

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

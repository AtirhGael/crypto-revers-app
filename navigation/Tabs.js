import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Portfolio from '../screens/Portfolio';

import { COLORS, icons } from '../constants';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: COLORS.primary,
            tabBarInactiveBackgroundColor:  COLORS.primary,
            tabBarShowLabel:false,
            backgroundColor: COLORS.primary,
            headerShown: false,
            style:{
                height:150,
                backgroundColor: COLORS.black,
                borderTopColor: "transparent",
            }
        }}
    >
    
        <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarIcon:({ focused })=>{
                    return(
                        <TabIcon
                        focused={focused}
                        icon={icons.home}
                        label="Home"
                        />
                    )
                }
            }}
        />
        <Tab.Screen name="portfolio" component={Portfolio}
        options={{
            tabBarIcon:({ focused })=>{
                return(
                    <TabIcon
                    focused={focused}
                    icon={icons.briefcase}
                    label="Portfolio"
                    />
                )
            }
        }}
        />
        <Tab.Screen name="Trade" component={Portfolio} 
        options={{
            tabBarIcon:({ focused })=>{
                return(
                    <TabIcon
                    focused={focused}
                    icon={icons.trade}
                    label="Trade"
                    isTrade = {true}
                    />
                )
            }
        }}
        />
        <Tab.Screen name="Market" component={Market} 
        options={{
            tabBarIcon:({ focused })=>{
                return(
                    <TabIcon
                    focused={focused}
                    icon={icons.market}
                    label="Market"
                    />
                )
            }
        }}
        />
        <Tab.Screen name="Profile" component={Portfolio} 
        options={{
            tabBarIcon:({ focused })=>{
                return(
                    <TabIcon
                    focused={focused}
                    icon={icons.profile}
                    label="Profile"
                    />
                )
            }
        }}
        />
      </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})
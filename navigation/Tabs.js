import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Market from '../screens/Market';
import Portfolio from '../screens/Portfolio';

import { COLORS, icons } from '../constants';
import TabIcon from '../components/TabIcon';

//redux starts here
import { connect } from 'react-redux';
import { setTradeModelVisibility } from '../stores/tab/tabActions';

const Tab = createBottomTabNavigator();

// for handling the trade button 
const TabBarCustomButton = ({children, onPress}) =>{
    return(
        <TouchableOpacity
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: COLORS.primary,
        }}
        onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = ({ setTradeModelVisibility, isTradeModalVisible }) => {
    //this function will be trigered when ever the trade function is clicked
    function tradeTabBarButtonOnclickHandler(){
        setTradeModelVisibility(!isTradeModalVisible) //setTradeModelVisibility is the oposite of isTradeModalVisible
    }
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: COLORS.primary,
            tabBarInactiveBackgroundColor:  COLORS.primary,
            tabBarShowLabel:false,
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
                    if(!isTradeModalVisible){
                        return(
                            <TabIcon
                            focused={focused}
                            icon={icons.home}
                            label="Home"
                            />
                        )
                    }
                   
                }
            }}
        />
        <Tab.Screen name="portfolio" component={Portfolio}
        options={{
            tabBarIcon:({ focused })=>{
                if(!isTradeModalVisible){
                return(
                    <TabIcon
                    focused={focused}
                    icon={icons.briefcase}
                    label="Portfolio"
                    />
                )
                }
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
            },
            tabBarButton:(props)=>(
                <TabBarCustomButton
                {...props}
                    onPress={()=> tradeTabBarButtonOnclickHandler() }
                />
            )
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

// export default Tabs

// we are getting the state from the reducer and also also the tab from the tabAction and injecting it into te tabs componentsfrom here
function mapStateToProps(state){
    return{
        isTradeModalVisible:state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch){
    return{
        setTradeModelVisibility:(isVisible)=>{
            return dispatch(setTradeModelVisibility(isVisible))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)


const styles = StyleSheet.create({})
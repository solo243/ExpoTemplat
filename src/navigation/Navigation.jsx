import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Wallet from '../screens/Wallet'
import Profile from '../screens/Profile'



const Navigation = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator()
const Tabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)

export default Navigation
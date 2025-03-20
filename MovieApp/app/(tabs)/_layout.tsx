import {View, Text} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5'

const commonOptions = () =>{
    return {
        
    }
}

const _Layout = ()=>{
    return (
        <Tabs.Navigator id={undefined}
            screenOptions={{
                tabBarActiveBackgroundColor: 'aliceblue',
                tabBarInactiveBackgroundColor: 'white',
            }}
        >
            <Tabs.Screen
                name='index'
                component={() => <View><Text>Home Screen</Text></View>}
                options={{
                    title: 'Home',
                    headerShown: true,
                    tabBarActiveBackgroundColor: 'aliceblue',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarIcon: ({color, size})=>(
                        <Icon name='home' color={color} size={size} />
                    ),
                    headerTintColor: 'blue',
                }}
                
            />
            <Tabs.Screen
                name='search'
                component={() => <View><Text>Search Screen</Text></View>}
                options={{
                    title: 'Search',
                    headerShown: true,
                    tabBarIcon: ({color, size})=>(
                        <Icon name='search' color={color} size={size} />
                    ),
                    headerTitle: 'Search',
                    headerTitleAlign: 'center',
                    
                }}
            />
            <Tabs.Screen
                name='saved'
                component={() => <View><Text>Saved Screen</Text></View>}
                options={{
                    title: 'Saved',
                    headerShown: true,
                    tabBarIcon: ({color, size})=>(
                        <Icon name='user' color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                component={() => <View><Text>Profile Screen</Text></View>}
                options={{
                    title: 'Profile',
                    headerShown: true,
                    tabBarIcon: ({color, size})=>(
                        <Icon name='user' color={color} size={size} />
                    )
                }}
            />
            
        </Tabs.Navigator>
    );
}

export default _Layout
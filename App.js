import React from 'react';
import {View,Button,Text}from'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createBottomTabNavigator}from'@react-navigation/bottom-tabs';
import {createNativeStackNavigator}from'@react-navigation/native-stack';

function FeedScreen({navigation}){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
<Button
title="Go to Settings-1"
onPress={()=>navigation.navigate('SettingsOne')}
/>
<Button
title="Go to Settings-2"
onPress={()=>navigation.navigate('SettingsTwo')}
/>
<Button
title="Go to Settings-3"
onPress={() =>navigation.navigate('SettingsThree')}
/>
</View>
);
}

function ProfileScreen({navigation}){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
<Button styles={{marginBottom:5}}
title="More Details"
onPress={()=>navigation.navigate('Name')}
/>
<Button
title="More Details-2"
onPress={()=>navigation.navigate('Age')}/>
<Button
title="More Details-3" onPress={()=>navigation.navigate('Email')}
/>
</View>
);
}

function AccountScreen({navigation}){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
<Button
title="User-1"
onPress={()=>navigation.navigate('UserOne')}
/>
<Button
title="User-2"
onPress={()=>navigation.navigate('UserTwo')}
/>
<Button
title="User-3"
onPress={()=>navigation.navigate('UserThree')}/>
</View>
)
}

function SettingsOneScreen(){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is settings one tab</Text></View>
)
}

function SettingsTwoScreen(){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is settings Two tab</Text></View>
)
}

function SettingsThreeScreen(){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is settings Three tab</Text></View>
)
}

function NameScreen(){
return (
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>My name is JOHN</Text></View>
)
}

function AgeScreen(){
return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>age: 40</Text></View>
)
}

function EmailScreen(){
return (
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>john123@gmail.com</Text></View>
)
}

function UserOneScreen(){
return (
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is Ram</Text></View>
)
}

function UserTwoScreen(){
return (
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is Ramesh</Text></View>
)
}

function UserThreeScreen(){
return (
<View style={{flex: 1, alignItems:'center',justifyContent:'center'}}>
<Text>Hai this is JOHN</Text></View>
)
}

const Tab = createBottomTabNavigator();

function HomeTabs(){
return (
<Tab.Navigator screenOptions={{ headerShown: false }}>
<Tab.Screen name="Feed" component={FeedScreen}/>
<Tab.Screen name="Profile" component={ProfileScreen}/>
<Tab.Screen name="Account" component={AccountScreen}/>
</Tab.Navigator>
);
}

const Stack = createNativeStackNavigator();

export default function App(){
return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeTabs}/>
<Stack.Screen name="SettingsOne" component={SettingsOneScreen}/>
<Stack.Screen name="SettingsTwo" component={SettingsTwoScreen}/>
<Stack.Screen name="SettingsThree" component={SettingsThreeScreen}/>
<Stack.Screen name="Name" component={NameScreen}/>
<Stack.Screen name="Age" component={AgeScreen}/>
<Stack.Screen name="Email" component={EmailScreen}/>
<Stack.Screen name="UserOne" component={UserOneScreen}/>
<Stack.Screen name="UserTwo" component={UserTwoScreen}/>
<Stack.Screen name="UserThree" component={UserThreeScreen}/>
</Stack.Navigator>
</NavigationContainer>
);
}


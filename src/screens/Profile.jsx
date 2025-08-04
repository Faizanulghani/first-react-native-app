import { Button, StyleSheet, Text, View } from 'react-native'

const Profile = ({navigation}) => {
  return (
   <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
         <Text style={{fontSize:20,fontWeight:500,marginBottom:10}}>Profile</Text>
         <Button title='About' onPress={()=>navigation.navigate('About')} />
       </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
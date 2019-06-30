import React,{Component} from 'react';
import {Card, Paragraph, Title, Button} from 'react-native-paper';
import {StyleSheet, View,Text} from 'react-native';
import {connect} from 'react-redux'




 class CounterApp extends Component {


      render() {
          return(
            <View>
            <Card>
            <Card.Cover source={require('../assets/burger.jpg')}/>
                    <Card.Content>
                        <Title>
                            Burger- $5.00
                        </Title>
                        <Paragraph>
                        This is the sweet-savory burger of your dreams. The two meat mixture is key here: 
                        The sirloin and has clean, distinctive flavor, while the chuck provides fattiness 
                        and keeps the burger juicy. 
                        </Paragraph>
                    </Card.Content>
                    </Card>
                    <View style={{flexDirection: 'row'}}>
                    <Button icon = "add" onPress={()=> this.props.Increase1()}></Button>
                    <Text>{this.props.counter1}</Text>
                    <Button icon ="remove" onPress={()=> this.props.Decrease1()}></Button>
                    </View>
                   
                    
            
            <Card>
            <Card.Cover source={require('../assets/ribs.jpg')}/>
                    <Card.Content>
                        <Title>
                            Ribs - $11.00
                        </Title>
                        <Paragraph>
                        Covered with our secret recipe rub then slow smoked for 4-6 hours over hardwood oak 
                        and apple woods to ‘melt-in-your-mouth’ perfection. Help yourself to the sauce of your choice. 
                        </Paragraph>
                    </Card.Content>
                    </Card>
                    <View style={{flexDirection: 'row'}}>
                    <Button icon = "add" onPress={()=> this.props.Increase2()}></Button>
                    <Text>{this.props.counter2}</Text>
                    <Button icon ="remove" onPress={()=> this.props.Decrease2()}></Button>
                    </View>

        </View>

          );

      }
}

function mapStateToProps(state){
    return{
        counter1:state.counter1,
        counter2:state.counter2
    }
}

function mapDispatchToProps(dispatch){
    return{
        Increase1 : ()=> dispatch({type : 'INCREASE_COUNTER1'}),
        Decrease1 : ()=> dispatch({type : 'DECREASE_COUNTER1'}),
        Increase2 : ()=> dispatch({type : 'INCREASE_COUNTER2'}),
        Decrease2 : ()=> dispatch({type : 'DECREASE_COUNTER2'})
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
const styles = StyleSheet.create({
    viewResizing: {
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        margin: 10,
        justifyContent:'space-between'
    }
});
import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { VictoryChart,VictoryGroup, VictoryBar, VictoryTheme, VictoryLabel} from 'victory-native';
const Data = {
actual: [
    {x: '0-3', y: 3},
    {x: '4-7', y: 12},
    {x: '8-10', y: 5}
],
}
const Bar: React.FC = () => {
return(
 <View>
    <VictoryChart  domainPadding={23}  >
        <VictoryGroup>
            <VictoryBar  data={Data.actual}
            style={{ data: { fill: "#00352F" } }}
            alignment="middle"
            labels={({ datum }) => `${datum.y}`}
            />
        </VictoryGroup>
    </VictoryChart>
 </View>
)
}
const Statistics = () => {
    return (
        <View>
        <Text style={styles.heading}>Here's how you rated your</Text>
        <Text style={styles.heading1}>days last month:</Text>
        <Text style={styles.months}>October 2022</Text>
        <Bar/>
        <Text style={styles.text1}>Rating</Text>
       </View>
    );
}
const styles = StyleSheet.create({
    heading: {
     top: 25,
     alignSelf: 'center',
     fontFamily: 'LexendExa-Regular',
     fontSize: 22,
     marginLeft: 20,
     marginRight: 20,
 },
 heading1: {
    marginTop: 20,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    fontSize: 22,
},
 month: {
    top: 40,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    fontSize: 22,
},
months: {
    marginTop: 100,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    fontSize: 22,
},
 noData: {
    top: 80,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '#A8A6A5',
    fontSize: 17,
},
text1: {
    marginTop: 1,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 12,
},
    });
export default Statistics;
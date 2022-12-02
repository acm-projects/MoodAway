import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { VictoryChart,VictoryGroup, VictoryBar, VictoryTheme, VictoryLabel} from 'victory-native';
// const DataJuly = {
//     actual: [
//         {x: '0-3', y: 2},
//         {x: '4-7', y: 3},
//         {x: '8-10', y: 5}
//     ],
//     }
const DataAug = {
    actual: [
        {x: '0-3', y: 1},
        {x: '4-7', y: 3},
        {x: '8-10', y: 11}
    ],
    }
const DataSept = {
    actual: [
        {x: '0-3', y: 1},
        {x: '4-7', y: 2},
        {x: '8-10', y: 3}
    ],
    }
const DataOct = {
actual: [
    {x: '0-3', y: 4},
    {x: '4-7', y: 1},
    {x: '8-10', y: 2}
],
}
const DataNov = {
    actual: [
        {x: '0-3', y: 4},
        {x: '4-7', y: 5},
        {x: '8-10', y: 10}
    ],
    }
// const July: React.FC = () => {
//     return(
//      <View>
//         <VictoryChart  domainPadding={23}  >
//             <VictoryGroup>
//                 <VictoryBar  data={DataJuly.actual}
//                 style={{ data: { fill: "#00352F" } }}
//                 alignment="middle"
//                 labels={({ datum }) => `${datum.y}`}
//                 />
//             </VictoryGroup>
//         </VictoryChart>
//      </View>
//     )
//     }
const August: React.FC = () => {
    return(
     <View>
        <VictoryChart  domainPadding={23}  >
            <VictoryGroup>
                <VictoryBar  data={DataAug.actual}
                style={{ data: { fill: "#00352F" } }}
                alignment="middle"
                labels={({ datum }) => `${datum.y}`}
                />
            </VictoryGroup>
        </VictoryChart>
     </View>
    )
    }
const September: React.FC = () => {
    return(
     <View>
        <VictoryChart  domainPadding={23}  >
            <VictoryGroup>
                <VictoryBar  data={DataSept.actual}
                style={{ data: { fill: "#00352F" } }}
                alignment="middle"
                labels={({ datum }) => `${datum.y}`}
                />
            </VictoryGroup>
        </VictoryChart>
     </View>
    )
    }
const October: React.FC = () => {
return(
 <View>
    <VictoryChart  domainPadding={23}  >
        <VictoryGroup>
            <VictoryBar  data={DataOct.actual}
            style={{ data: { fill: "#00352F" } }}
            alignment="middle"
            labels={({ datum }) => `${datum.y}`}
            />
        </VictoryGroup>
    </VictoryChart>
 </View>
)
}
const November: React.FC = () => {
    return(
     <View>
        <VictoryChart  domainPadding={23}  >
            <VictoryGroup>
                <VictoryBar  data={DataNov.actual}
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
        <ScrollView>
        <Text style={styles.heading}>Here's how you rated your</Text>
        <Text style={styles.heading1}>days this year:</Text>
        <Text style={styles.months}>August 2022</Text>
        <August/>
        <Text style={styles.text1}>Rating</Text>
        <Text style={styles.months}>September 2022</Text>
        <September/>
        <Text style={styles.text1}>Rating</Text>
        <Text style={styles.months}>October 2022</Text>
        <October/>
        <Text style={styles.text1}>Rating</Text>
        <Text style={styles.month1}>November 2022</Text>
        <November/>
        <Text style={styles.text1}>Rating</Text>
        <Text style={styles.month1}>December 2022</Text>
        <Text style={styles.noData}>No Data</Text>
       </ScrollView>
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
 month1: {
    marginTop: 40,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    fontSize: 22,
},
months: {
    marginTop: 80,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    fontSize: 22,
},
 noData: {
    marginTop: 40,
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
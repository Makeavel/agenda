import { View , Text , ScrollView } from "react-native";
import { HabityDay , DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateRangeDatesFromYearStart } from '../utlis/generate-range-between-dates';

const Days = ['D', 'S' , 'T' , 'Q' , 'Q' , 'S' , 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimumSummaryDateSizes = 18*5;
const amountOfDasToFill = minimumSummaryDateSizes - datesFromYearStart.length;
export function Home(){
    return (
        <View className = "flex-1 bg-background px-8 py-16">
            <Header/>

            <View className="flex-row mt-6 mb-2">
                {
                    Days.map((Days,i) =>(
                        <Text key={`${Days}-${i}`}
                              className="text-zinc-400 text-xl font-bold text-center mx-1"
                              style={{width: DAY_SIZE}}>
                            {Days}
                        </Text>
                    ))
                }
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom:100}}>
                <View className="flex-row flex-wrap">
                    {
                        datesFromYearStart.map(date => (
                            <HabityDay
                                key={date.toISOString()}
                            />
                        ))
                    }
                    {
                    amountOfDasToFill > 0 && Array
                    .from({length : amountOfDasToFill})
                    .map((_,index) =>(
                        <View
                            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-50"
                            style={{width: DAY_SIZE , height: DAY_SIZE}}
                        />
                    ))
                    }
                </View>
            </ScrollView>
            </View>
    )
}
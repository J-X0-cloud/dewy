import { StyleSheet, Text, View } from "react-native";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { TimelineItem } from "@/components/TimelineItem";
import { TrendChart } from "@/components/TrendChart";
import { colors, fonts, radii } from "@/constants/theme";
import { monthlyRecap, skinTrend, timeline, trendMonths } from "@/lib/data";

export default function ProgressScreen() {
  return (
    <Screen kicker="Progress" title={`${skinTrend.length} weeks of check-ins`}>
      <Card>
        <TrendChart data={skinTrend} months={trendMonths} />
      </Card>

      <View>
        {timeline.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </View>

      <View style={styles.recap}>
        <Text style={styles.recapTitle}>{monthlyRecap.title}</Text>
        <Text style={styles.recapBody}>{monthlyRecap.body}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  recap: { backgroundColor: colors.ink, borderRadius: radii.md + 2, padding: 14 },
  recapTitle: { fontFamily: fonts.uiMedium, fontSize: 15, color: "#fff" },
  recapBody: { fontFamily: fonts.ui, fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 2 },
});

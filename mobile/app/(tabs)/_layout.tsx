import { Tabs } from "expo-router";
import { TabIcon, type TabIconName } from "@/components/TabIcon";
import { colors, fonts } from "@/constants/theme";

const TABS: { name: string; title: string; icon: TabIconName }[] = [
  { name: "index", title: "Today", icon: "today" },
  { name: "checkin", title: "Check-in", icon: "checkin" },
  { name: "routine", title: "Routine", icon: "routine" },
  { name: "shelf", title: "Shelf", icon: "shelf" },
  { name: "progress", title: "Progress", icon: "progress" },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.plum,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: { fontFamily: fonts.ui, fontSize: 11 },
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: "#F0E4DF",
        },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => <TabIcon name={tab.icon} color={color} size={size - 2} />,
          }}
        />
      ))}
    </Tabs>
  );
}

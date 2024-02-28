const WEEKDAY = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" });

export function dayLabel(date: Date): string {
  return WEEKDAY.format(date);
}

export function greetingFor(date: Date, name: string): string {
  const hour = date.getHours();
  const part = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  return `Good ${part}, ${name}`;
}

export function routineMeta(done: number, total: number, minutes: number): string {
  return `${done} of ${total} steps · about ${minutes} min`;
}

import {EventPayload} from './models/event-payload';

export function createCalendarEvent(event: EventPayload) {
  const startDate = toGoogleCalendarDateString(combineDateAndTime(event.startDate, event.startTime));
  const endDate = toGoogleCalendarDateString(combineDateAndTime(event.endDate, event.endTime));

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(event.title)}` +
    `&details=${encodeURIComponent(event.description)}` +
    `&location=${encodeURIComponent(event.location)}` +
    `&dates=${startDate}/${endDate}`;

  window.open(googleCalendarUrl, '_blank');
}

export function combineDateAndTime(date: string, time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);

  const combined = new Date(date);
  combined.setHours(hours);
  combined.setMinutes(minutes);
  combined.setSeconds(0);
  combined.setMilliseconds(0);

  return combined;
}

export function toGoogleCalendarDateString(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}Z$/, 'Z');
}

export function downloadIcsEvent(options: {
  title: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
}) {
  const pad = (n: number) => n.toString().padStart(2, '0');

  const formatDate = (date: Date) => {
    return date.getUTCFullYear().toString() +
      pad(date.getUTCMonth() + 1) +
      pad(date.getUTCDate()) + 'T' +
      pad(date.getUTCHours()) +
      pad(date.getUTCMinutes()) +
      pad(date.getUTCSeconds()) + 'Z';
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//your-app//calendar-event//EN
BEGIN:VEVENT
UID:${Date.now()}@your-app
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(options.start)}
DTEND:${formatDate(options.end)}
SUMMARY:${options.title}
DESCRIPTION:${options.description || ''}
LOCATION:${options.location || ''}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], {type: 'text/calendar'});
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${options.title}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

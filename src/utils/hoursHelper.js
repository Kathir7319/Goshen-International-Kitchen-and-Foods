// Helper to compute open/closed status for Goshen International Kitchen and Foods
// Schedule:
// Mon-Thu: 7:00 AM – 6:00 PM
// Fri: 11:30 AM – 3:00 PM
// Sat-Sun: Closed (Check seasonal adjustments / available for private weekend catering)

export function getStoreStatus() {
  try {
    // Format to US Eastern Time (Morrisville, NC)
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    
    const parts = formatter.formatToParts(now);
    let weekday = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekday = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentMinutes = hour * 60 + minute;

    // Check days
    const isMonToThu = ['Mon', 'Tue', 'Wed', 'Thu'].includes(weekday);
    const isFri = weekday === 'Fri';

    if (isMonToThu) {
      const openMinutes = 7 * 60; // 7:00 AM
      const closeMinutes = 18 * 60; // 6:00 PM
      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        return {
          isOpen: true,
          message: 'Open Now • Closes at 6:00 PM',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
        };
      } else if (currentMinutes < openMinutes) {
        return {
          isOpen: false,
          message: 'Opens Today at 7:00 AM',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
        };
      } else {
        return {
          isOpen: false,
          message: weekday === 'Thu' ? 'Opens Friday at 11:30 AM' : 'Opens Tomorrow at 7:00 AM',
          badgeColor: 'bg-stone-200 text-stone-700 border-stone-300'
        };
      }
    } else if (isFri) {
      const openMinutes = 11 * 60 + 30; // 11:30 AM
      const closeMinutes = 15 * 60; // 3:00 PM
      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        return {
          isOpen: true,
          message: 'Open Now • Closes at 3:00 PM',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
        };
      } else if (currentMinutes < openMinutes) {
        return {
          isOpen: false,
          message: 'Opens Today at 11:30 AM',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
        };
      } else {
        return {
          isOpen: false,
          message: 'Closed for Weekend • Opens Monday at 7:00 AM',
          badgeColor: 'bg-stone-200 text-stone-700 border-stone-300'
        };
      }
    } else {
      // Sat or Sun
      return {
        isOpen: false,
        message: 'Weekend: Catering & Special Orders Only • Opens Mon 7:00 AM',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
      };
    }
  } catch {
    // Fallback
    return {
      isOpen: true,
      message: 'Mon-Thu 7AM–6PM | Fri 11:30AM–3PM',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    };
  }
}

/**
 * Website Launch Configuration
 * 
 * Edit this file to adjust the website launch time, auspicious timings, and display texts.
 */

export interface LaunchConfig {
  /**
   * The target launch time in ISO 8601 format or compatible date string.
   * Format: YYYY-MM-DDTHH:mm:ss+Timezone
   * 
   * For Testing:
   * Current testing time requested: 12:35 AM on 15th October 2026.
   * 
   * Actual Auspicious Launch Time (from invitation card):
   * India Time: 1:19 PM IST -> '2026-10-15T13:19:00+05:30'
   * Dubai Time: 11:49 AM GST -> '2026-10-15T11:49:00+04:00'
   */
  targetLaunchTime: string;

  /**
   * Details from the auspicious invitation card
   */
  title: string;
  founderName: string;
  heading: string;
  occasion: string;
  auspiciousDate: string;
  tithi: string;
  dedication: string;
  dubaiTime: string;
  indiaTime: string;
  tagline: string;

  /**
   * Card image path (placed in public/images/launch-card.jpg)
   */
  cardImage: string;

  /**
   * Controls whether users can close/dismiss the popup to browse the site before launch time.
   * Set to true to allow browsing in preview mode, or false to lock the site until launch time.
   */
  allowPreviewBeforeLaunch: boolean;

  /**
   * Automatically show the launch popup when a visitor arrives.
   */
  autoOpen: boolean;

  /**
   * Show celebration confetti shower when site is live.
   */
  enableConfetti: boolean;
}

export const LAUNCH_CONFIG: LaunchConfig = {
  // 🕒 Target launch time (Set for testing at 12:35 AM today: 15th October 2026)
  // To switch to actual launch time later, change to '2026-10-15T13:19:00+05:30' (1:19 PM IST)
  // targetLaunchTime: '2026-10-15T00:35:00+05:30',
  // targetLaunchTime: '2026-10-15T02:32:00+05:30',
  targetLaunchTime: '2026-10-15T13:19:00+05:30',



  title: 'The Golden Numeralist',
  founderName: 'Namrattaa Lal',
  heading: 'Numerology Website Launch',
  occasion: 'Launching on an Auspicious Day',
  auspiciousDate: '15th October 2026',
  tithi: 'Lalita Panchami | Navratri',
  dedication: 'In Loving Memory of My Mother - Her Blessings, Her Guidance',
  dubaiTime: '11:49 AM',
  indiaTime: '1:19 PM',
  tagline: 'Choose The Path That Resonates • Align • Transform',

  cardImage: '/images/launch-card.jpg',
  allowPreviewBeforeLaunch: true,
  autoOpen: true,
  enableConfetti: true,
};

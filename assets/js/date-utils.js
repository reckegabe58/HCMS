/**
 * HCMS Date Utilities
 * Reusable helper functions for dynamic date generation
 * Use these across the site to avoid hardcoded years
 */

const HCMSDateUtils = {
  /**
   * Get the current year
   * @returns {number} Current year (e.g., 2026)
   */
  getCurrentYear: function() {
    return new Date().getFullYear();
  },

  /**
   * Get the current school year string
   * School year runs Sept - June
   * @returns {string} e.g., "2025-2026" if current date is between Sept 2025 and June 2026
   */
  getSchoolYear: function() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed (0 = Jan, 8 = Sept)

    // If we're in Sept-Dec, school year is currentYear-nextYear
    // If we're in Jan-Aug, school year is prevYear-currentYear
    if (month >= 8) { // September or later
      return `${year}-${year + 1}`;
    } else {
      return `${year - 1}-${year}`;
    }
  },

  /**
   * Get the Monday of the current week
   * @returns {Date} Monday of current week
   */
  getMondayOfCurrentWeek: function() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
    const monday = new Date(now.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
  },

  /**
   * Get the Friday of the current week
   * @returns {Date} Friday of current week
   */
  getFridayOfCurrentWeek: function() {
    const monday = this.getMondayOfCurrentWeek();
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);
    return friday;
  },

  /**
   * Get all weekdays (Mon-Fri) of current week with dates
   * @returns {Array} Array of {day: string, date: Date, dateString: string}
   */
  getCurrentWeekDays: function() {
    const monday = this.getMondayOfCurrentWeek();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return days.map((dayName, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);
      return {
        day: dayName,
        date: date,
        dateString: this.formatDateShort(date),
        isToday: this.isToday(date)
      };
    });
  },

  /**
   * Check if a date is today
   * @param {Date} date - Date to check
   * @returns {boolean}
   */
  isToday: function(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  },

  /**
   * Format date as "Jan 12, 2026"
   * @param {Date} date - Date to format
   * @returns {string} Formatted date string
   */
  formatDateFriendly: function(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  },

  /**
   * Format date as "Jan 12"
   * @param {Date} date - Date to format
   * @returns {string} Short formatted date
   */
  formatDateShort: function(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  },

  /**
   * Format date as "January 12, 2026"
   * @param {Date} date - Date to format
   * @returns {string} Full formatted date string
   */
  formatDateFull: function(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  },

  /**
   * Get "Week of Jan 12, 2026" string for current week
   * @returns {string}
   */
  getWeekOfString: function() {
    const monday = this.getMondayOfCurrentWeek();
    return `Week of ${this.formatDateFriendly(monday)}`;
  },

  /**
   * Get current month name
   * @returns {string} e.g., "January"
   */
  getCurrentMonth: function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[new Date().getMonth()];
  },

  /**
   * Get current season for seasonal theming
   * @returns {string} 'spring', 'summer', 'fall', or 'winter'
   */
  getCurrentSeason: function() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  },

  /**
   * Get schedule data for the week
   * Following the lunch/after-school pattern
   * @returns {Array}
   */
  getWeeklySchedule: function() {
    const weekDays = this.getCurrentWeekDays();
    const scheduleRules = {
      'Monday': ['Lunch Program'],
      'Tuesday': ['Lunch Program', 'After School: Grades 1-3'],
      'Wednesday': ['Lunch Program', 'After School: Grades 4-6'],
      'Thursday': ['Lunch Program', 'After School: Grades 7-8'],
      'Friday': ['Lunch Program', 'After School: Grades 1-8']
    };

    return weekDays.map(dayInfo => ({
      ...dayInfo,
      events: scheduleRules[dayInfo.day] || []
    }));
  },

  /**
   * Initialize dynamic date elements on the page
   * Looks for elements with data-date-* attributes and updates them
   */
  initDynamicDates: function() {
    // Update elements with data-date-year
    document.querySelectorAll('[data-date-year]').forEach(el => {
      el.textContent = this.getCurrentYear();
    });

    // Update elements with data-date-school-year
    document.querySelectorAll('[data-date-school-year]').forEach(el => {
      el.textContent = this.getSchoolYear();
    });

    // Update elements with data-date-week-of
    document.querySelectorAll('[data-date-week-of]').forEach(el => {
      el.textContent = this.getWeekOfString();
    });

    // Update copyright years
    document.querySelectorAll('[data-date-copyright]').forEach(el => {
      el.textContent = `© ${this.getCurrentYear()}`;
    });
  }
};

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    HCMSDateUtils.initDynamicDates();
  });
}

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HCMSDateUtils;
}

export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        // Return a default value or a specific message if the date is invalid
        return "Invalid Date";
    }
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
}

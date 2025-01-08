const useDateFormatter = (date) => {
    // Check if the input is valid
    if (!date || isNaN(new Date(date).getTime())) {
        return "Invalid Date"; // Return a fallback message for invalid inputs
    }

    // Format the valid date
    let d = new Date(date);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    return `${day}-${month}-${year}`;
};

export default useDateFormatter;

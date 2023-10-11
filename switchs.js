var day = "Friday";
console.log('good morning');
switch (day) {
    case "Monday": console.log('8 am');
        break;
    case "Tuesday":
    case "Friday": console.log('its', day); console.log('8:30 am');
        break;
    case "Wednesday": console.log('9:00 am');
        break;
    case "Thursday": console.log('9:30 am');
        break;
    // case "Friday": console.log('10:00 am');
    //     break;
    case "Saturday": console.log('10:30 am');
        break;
    default: console.log('11 am');
        break;
}

import { Name } from "./display-name.styles";

const getDisplayPrefix = (time) => {
    let prefix = null;
    if (time <= 11) {
        prefix = "Good morning, "
    } else if (time <= 16) {
        prefix = "Good afternoon, "
    } else {
        prefix = "Good evening, "
    }
    return prefix;
}

const DisplayName = ( {name} ) => {
    const currHour = new Date().getHours();
    const prefix = getDisplayPrefix(currHour);
    return(
        <Name>{prefix}{name}</Name>
    );
}

export default DisplayName;
const getCityTime = event => {
    if(event.target.length > 0){
        let time = moment().tz(event.target.value).format('dddd, MMMM D, YYYY h:mm A');

        alert(`It is ${time} in ${event.target.value}`);
    }
};

document.querySelector("#countries").addEventListener("change", getCityTime);
  const getCityTime = (event) => {
        if (event.target.value.length > 0) {
          let time = moment()
            .tz(event.target.value)
            .format("dddd, MMMM D, YYYY h:mm A");

          alert(`It is ${time} in ${event.target.value}`);
        }
      };

      let element = document.querySelector("#countries");
      element.addEventListener("change", getCityTime);

const updateTime = () => {

    //   New York Elements
      let newYorkElement = document.querySelector("#new-york");
      let newYorkDateElement = document.querySelector("#new-york .date");
      let newYorkTime = document.querySelector("#new-york-time");

      newYorkDateElement.innerHTML = moment().format('MMMM Do YYYY');
      newYorkTime.innerHTML = moment().tz("America/New_York").format('hh:mm:ss [<small>]a[</small>]')

    //   Berlin Elements
    let berlinElement = document.querySelector("#berlin");
      let berlinDateElement = document.querySelector("#berlin .date");
      let berlinTime = document.querySelector("#berlin-time");

      berlinDateElement.innerHTML = moment().format('MMMM Do YYYY');
      berlinTime.innerHTML = moment().tz("Europe/Berlin").format('hh:mm:ss [<small>]a[</small>]')

    //Aukland Elements
    let auklandElement = document.querySelector("#aukland");
      let auklandDateElement = document.querySelector("#aukland .date");
      let auklandTime = document.querySelector("#aukland-time");
      
      auklandDateElement.innerHTML = moment().format('MMMM Do YYYY');
      auklandTime.innerHTML = moment().tz("Pacific/Aukland").format('hh:mm:ss [<small>]a[</small>]')
};

updateTime();
setInterval(updateTime, 1000);
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
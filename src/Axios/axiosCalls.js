// success = (pos) => {
//     let crd = pos.coords;
//     axiosConfig.get('locations/v1/cities/geoposition/search' + API_PATH + '&q='
//         + crd.latitude + '%2C' + crd.longitude).then(data => {
//             this.submit(data.data.Key, data.data.EnglishName);
//             this.props.firstTimeFinished();
//         }).catch(error => this.props.openModal('Error', error.toString()))
// }

// componentDidMount() {
//         const oldFavorites = JSON.parse(localStorage.getItem('favorites'));
//         this.props.updateFavorites(oldFavorites);
//         if (this.props.first) {
//             const cityKey = "215854";
//             const cityName = 'Tel Aviv';
//             axios.all([axiosConfig.get('forecasts/v1/daily/5day/' + cityKey + API_PATH),
//             axiosConfig.get('currentconditions/v1/' + cityKey + API_PATH)])
//                 .then(data => {
//                     this.props.setCurrentCityDetails(data, cityKey, cityName);
//                     this.props.firstTimeFinished();
//                 }).then(() => {
//                     navigator.geolocation.getCurrentPosition(this.success, this.errorLog, {
//                         enableHighAccuracy: true,
//                         timeout: 5000,
//                         maximumAge: 0
//                     });
//                 }).catch(error => this.props.openModal('Error', error.toString()));
//         }

//     }


// changeHandler = (event) => {
//     this.props.updateText(event.target.value);
//     axiosConfig.get('locations/v1/cities/autocomplete' + API_PATH + '&q=' + event.target.value)
//         .then(response => {
//             let arr = [];
//             for (let i = 0; i < response.data.length; i++) {
//                 arr[i] = {
//                     key: response.data[i].Key,
//                     text: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
//                     value: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,

//                 }
//             }
//             this.props.updateSearch(arr);
//         }
//         ).catch(error => this.props.openModal('Error', error.toString()));
// }

// submit = (cityKey = this.props.searchText[0].key, cityName = this.props.searchText[0].text.split(',')[0]) => {
//     axios.all([axiosConfig.get('forecasts/v1/daily/5day/' + cityKey + API_PATH),
//     axiosConfig.get('currentconditions/v1/' + cityKey + API_PATH)])
//         .then(data => {
//             this.props.setCurrentCityDetails(data, cityKey, cityName);
//             this.props.clearText();
//         }).catch(errors => this.props.openModal('Error', errors.toString()))
// }
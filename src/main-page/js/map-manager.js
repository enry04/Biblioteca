
import FetchUtil from "../../common/js/fetch-util.js";

class MapManager {
    constructor(parentElement) {
        this.rootElement = parentElement;
    }

    init() {
        let map;
        let latitudine = 41.8719400;
        let longitudine = 12.5673800;
        let mapOptions = {
            center: new google.maps.LatLng(latitudine, longitudine),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(this.rootElement, mapOptions);
        FetchUtil.postData("./php/read-points.php", {}).then((response) => {
            if (response.status == "success") {
                var imp = JSON.parse(response.data);
                for (let i = 0; i < imp.length; i++) {
                    let pLatLng = new google.maps.LatLng(imp[i]['latitudine'], imp[i]['longitudine']);
                    var image = '../common/images/icons/marker-icon.svg';
                    let marker = new google.maps.Marker({
                        position: pLatLng,
                        map: map,
                        icon: image,
                        url: "../dairy-page/dairy.php?libraryId=" + imp[i]['id'],
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        window.location.href = this.url;
                    });
                }
            }
        })

    }
}

export default MapManager;
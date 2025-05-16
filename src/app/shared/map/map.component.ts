import {AfterViewInit, Component, EventEmitter, Inject, Output} from '@angular/core';
import * as L from 'leaflet';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  standalone: true
})
export class MapComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}
  @Output() location = new EventEmitter<string>();
  private map: L.Map;
  private marker: L.Marker;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const {lat, lng} = e.latlng;

      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }

      this.reverseGeocode(lat, lng);
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  reverseGeocode(lat: number, lon: number) {
    this.http.get<any>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
      .pipe(take(1))
      .subscribe(data => {
        const address = data.display_name;
        this.location.emit(address);
        this.marker.bindPopup(address).openPopup();
      });
  }
}

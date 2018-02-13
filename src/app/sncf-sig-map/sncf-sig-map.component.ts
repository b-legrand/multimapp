import { Component, OnInit, OnChanges, Input, Output } from "@angular/core";
import { ElementRef, EventEmitter, ViewChild } from "@angular/core";
import * as esriLoader from "esri-loader";
import { Logger } from "typescript-logger/build/logger";
import { Log } from "typescript-logger/build/log";
export enum MapEventType {
  MAP_LOADED,
}
export type MapEvent = { 
  map: __esri.Map;
  mapView?: __esri.MapView;
  type?: MapEventType
};
/**
 * composant chargé d'afficher une map esri.
 */
@Component({
  selector: "sncf-sig-map",
  styleUrls: ["./sncf-sig-map.component.css"],
  templateUrl: "./sncf-sig-map.component.html"
})
export class SncfSigMapComponent implements OnInit, OnChanges {
  /**
   *  Logger du composant
   */
   private logger: Logger<{}> = Log.create("SigMapComponent");

  /**
   * Element du dom dans lequel mettre la map
   */
  @ViewChild("mapRef", { read: ElementRef })
  public mapEl: ElementRef;

  /**
   * Propriétés de la Map esri.
   */
  @Input()
  public mapProperties: __esri.MapProperties;

  @Input()
  public mapViewProperties: __esri.MapViewProperties;

  @Output()
  public mapLoaded: EventEmitter<MapEvent> = new EventEmitter<MapEvent>();

  private map: __esri.Map;
  private mapView: __esri.MapView;

  /**
   * remonte un callback map loaded aux parents
   */
  public handleMapLoaded(): void {
    this.mapLoaded.emit(
      {
        map: this.map,
        mapView: this.mapView,
        type: MapEventType.MAP_LOADED
      }
    );
  }

  /**
   * Charge les composants esri.
   */
  public ngOnInit(): void {
    const loaderOptions = {
      url: "//js.arcgis.com/4.6"
    };
    esriLoader
      .loadModules(["esri/Map", "esri/views/MapView"], loaderOptions)
      .then(([Map, MapView]) => {

        this.map = new Map(this.mapProperties);

        this.mapView = new MapView({
          ...this.mapViewProperties,
          constraints: {
            rotationEnabled: false,
          },
          container: this.mapEl.nativeElement,
          map: this.map,
        } as __esri.MapViewProperties);

        this.logger.info("map loaded!");

        this.mapView.watch("resize", () => {
          this.logger.debug("map resized callback");
        });

        this.handleMapLoaded();
      })
      .catch(error => {
        this.logger.error(error);
      });
  }

  public ngOnChanges(changes: any): void {
    if (!changes) {
      return;
    }
    if (!changes.mapViewProperties || !changes.mapProperties) {
      return;
    }
    // todo rafraichir les conf de Map depuis composant parent.
  }
}
